#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
#include <set>
#include <map>
#include <stack>
#include <math.h>
#include <iterator>
using namespace std;

struct prob
{
  long long int a;
  long long int b;
};

struct pevent
{
  prob A;
  prob B;
  prob K;
};

long long int MOD = 1000000007;
int parent[200001][20];
int level[200001];
pevent condProb[200001][20];
bool isCondProbSet[200001][20];
pevent events[200001];
bool isEventKSet[200001];
long long int L = 19;

prob compFrac(prob x)
{
  return {.a = (x.b - x.a + MOD) % MOD, .b = x.b};
}
prob sumFrac(prob x, prob y)
{
  long long int a = (((x.a * y.b) % MOD) + ((y.a * x.b) % MOD)) % MOD;
  long long int b = (x.b * y.b) % MOD;
  return {.a = a, .b = b};
}

prob mulFrac(prob x, prob y)
{
  long long int a = (x.a * y.a) % MOD;
  long long int b = (x.b * y.b) % MOD;
  return {.a = a, .b = b};
}

pevent getProbOfEvent(int n)
{
  stack<int> q;
  if (!isEventKSet[n])
  {
    q.push(n);
  }

  while (q.size())
  {
    int e = q.top();
    if (!isEventKSet[parent[e][0]])
    {
      q.push(parent[e][0]);
    }
    else
    {
      q.pop();
      auto pe = getProbOfEvent(parent[e][0]);
      auto Kparent = pe.K;
      long long int K = (events[e].A.a * Kparent.a) % MOD;
      long long int Kden = (1000000 * Kparent.b) % MOD;
      K = (K + ((events[e].B.a * ((Kparent.b - Kparent.a + MOD) % MOD)) % MOD)) % MOD;
      events[e].K = {.a = K, .b = Kden};
      isEventKSet[e] = true;
    }
  }

  return events[n];
}

long long int modInverse(long long int a, long long int m)
{
  long long int m0 = m;
  long long int y = 0;
  long long int x = 1;

  if (m == 1)
  {
    return 0;
  }

  while (a > 1)
  {
    long long int q = a / m;
    long long int t = m;

    m = a % m;
    a = t;
    t = y;

    y = x - q * y;
    x = t;
  }

  if (x < 0)
  {
    x += m0;
  }
  return x;
}

int getLevel(int n)
{
  stack<int> q;
  if (level[n] == -1)
  {
    q.push(n);
  }
  while (q.size())
  {
    int p = q.top();
    if (level[parent[p][0]] == -1)
    {
      q.push(parent[p][0]);
    }
    else
    {
      q.pop();
      level[p] = level[parent[p][0]] + 1;
    }
  }

  return level[n];
}

pevent getProbCond(int child, int grandpa)
{
  vector<pevent> probs;
  for (int h = L - 1; h >= 0; h--)
  {
    if (getLevel(child) - getLevel(grandpa) >= 1 << h)
    {
      probs.push_back(condProb[child][h]);
      child = parent[child][h];
    }
  }
  if (!probs.size())
  {
    return {.A = {.a = 1, .b = 1}, .B = {.a = 0, .b = 1}};
  }
  pevent ret = probs[0];
  for (int i = 1; i < probs.size(); i++)
  {
    auto p2 = probs[i];
    auto Agp = sumFrac(mulFrac(ret.A, p2.A), mulFrac(compFrac(p2.A), ret.B));
    auto Bgp = sumFrac(mulFrac(ret.A, p2.B), mulFrac(compFrac(p2.B), ret.B));
    ret = {.A = Agp, .B = Bgp, .K = ret.K};
  }
  return ret;
}

int getLca(int u, int v)
{
  int lu = getLevel(u);
  int lv = getLevel(v);

  if (lv > lu)
  {
    swap(u, v);
  }
  for (int h = L - 1; h >= 0; h--)
  {
    if (getLevel(u) - getLevel(v) >= 1 << h)
    {
      u = parent[u][h];
    }
  }
  if (u == v)
  {
    return u;
  }

  for (int h = L - 1; h >= 0; h--)
  {
    if (parent[u][h] != parent[v][h])
    {
      u = parent[u][h];
      v = parent[v][h];
    }
  }
  return parent[u][0];
}

int main()
{
  int T, N, Q, P, u, v;
  long long int K, A, B;
  cin >> T;
  for (int t = 0; t < T; t++)
  {
    for (int i = 0; i < 200000; i++)
    {
      level[i] = -1;
      isEventKSet[i] = false;
      for (int j = 0; j < L; j++)
      {
        parent[i][j] = -1;
        isCondProbSet[i][j] = false;
      }
    }
    level[0] = 0;
    cin >> N >> Q >> K;
    events[0] = {.K = {.a = K, .b = 1000000L}};
    isEventKSet[0] = true;

    for (int i = 1; i < N; i++)
    {
      cin >> P >> A >> B;
      parent[i][0] = P - 1;
      events[i] = {
          .A = {.a = A, .b = 1000000L},
          .B = {.a = B, .b = 1000000L},
      };
      condProb[i][0] = {.A = events[i].A, .B = events[i].B};
      isCondProbSet[i][0] = true;
    }

    for (int h = 1; h < L; h++)
    {
      for (int i = 0; i < N; i++)
      {
        if (
            parent[i][h - 1] != -1 &&
            isCondProbSet[i][h - 1] &&
            isCondProbSet[parent[i][h - 1]][h - 1])
        {
          parent[i][h] = parent[parent[i][h - 1]][h - 1];
          auto p1 = condProb[i][h - 1];
          auto p2 = condProb[parent[i][h - 1]][h - 1];
          prob Agp = sumFrac(mulFrac(p1.A, p2.A), mulFrac(compFrac(p2.A), p1.B));
          prob Bgp = sumFrac(mulFrac(p1.A, p2.B), mulFrac(compFrac(p2.B), p1.B));
          condProb[i][h] = {.A = Agp, .B = Bgp};
          isCondProbSet[i][h] = true;
        }
      }
    }

    cout << "Case #" << t + 1 << ":";
    for (int i = 0; i < Q; i++)
    {
      cin >> u >> v;
      u--;
      v--;
      int lca = getLca(u, v);

      pevent p = getProbCond(u, lca);
      pevent q = getProbCond(v, lca);
      pevent r = getProbOfEvent(lca);

      prob sol = sumFrac(mulFrac(mulFrac(p.A, q.A), r.K), mulFrac(mulFrac(p.B, q.B), compFrac(r.K)));

      cout << " " << (modInverse(sol.b, MOD) * sol.a) % MOD;
    }
    cout << endl;
  }

  return 0;
}
