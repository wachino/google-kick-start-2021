#include <iostream>
#include <algorithm>
#include <vector>
#include <math.h>
#include <functional>
#include <stack>

using namespace std;

long long int segmentTree[131072];
vector<int> dest[50000];
vector<int> road[50000];
long long int LbyRoad[50000];
long long int AbyRoad[50000];
long long int limits[50000];
vector<long long int> queriesByCityW[50000];
vector<int> queriesByCityI[50000];
long long int ans[100000];
int N, Q;

long long int gcd(long long int a, long long int b)
{
  long long int tmp;
  while (b)
  {
    tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

void update(long long int addValue, int start, int end, int at)
{
  int nextNode = 0;
  int mid;
  stack<int> q;
  q.push(nextNode);
  while (at != start || at != end)
  {
    mid = (start + end) >> 1;
    if (at <= mid)
    {
      nextNode = (nextNode << 1) | 1;
      end = mid;
    }
    else
    {
      start = mid + 1;
      nextNode = (nextNode + 1) << 1;
    }
    q.push(nextNode);
  }
  segmentTree[nextNode] = addValue;
  q.pop();
  while (!q.empty())
  {
    nextNode = q.top();
    q.pop();
    int leftChildNode = (nextNode << 1) | 1;
    int rightChildNode = (nextNode + 1) << 1;
    segmentTree[nextNode] = gcd(segmentTree[leftChildNode], segmentTree[rightChildNode]);
  }
}

long long int query(int start, int end, int until, int node = 0)
{

  if (until < start || end < 0)
  {
    return 0L;
  }
  if (0 <= start && end <= until)
  {
    return segmentTree[node];
  }
  int mid = (start + end) >> 1;

  int leftChildNode = (node << 1) | 1;
  int rightChildNode = (node + 1) << 1;
  return gcd(query(start, mid, until, leftChildNode), query(mid + 1, end, until, rightChildNode));
}

void setAnsForNode(int node)
{
  int left = 0;
  int right = N - 1;
  int mid;
  for (int j = 0; j < queriesByCityW[node].size(); j++)
  {
    long long int qW = queriesByCityW[node][j];
    int qI = queriesByCityI[node][j];
    left = 0;
    right = N - 1;
    while (left < right)
    {
      mid = (left + right + 1) >> 1;
      if (limits[mid] > qW)
      {
        right = mid - 1;
      }
      else
      {
        left = mid;
      }
    }
    ans[qI] = query(0, N - 1, left);
  }
}
void computeFrom(int parent, int node)
{
  int left = 0;
  int right = N - 1;
  int mid;
  setAnsForNode(node);
  for (int i = 0; i < dest[node].size(); i++)
  {
    int childDest = dest[node][i];
    int r = road[node][i];
    long long int childL = LbyRoad[r];
    long long int childA = AbyRoad[r];
    if (childDest != parent)
    {
      left = 0;
      right = N - 1;
      while (left < right)
      {
        mid = (left + right + 1) >> 1;
        if (limits[mid] > childL)
        {
          right = mid - 1;
        }
        else
        {
          left = mid;
        }
      }
      update(childA, 0, N - 1, left);
      computeFrom(node, childDest);
      update(0, 0, N - 1, left);
    }
  }
};

int main()
{
  int T;
  int x, y;
  long long int a, l;

  cin >> T;
  for (int t = 0; t < T; t++)
  {
    cin >> N >> Q;

    int treeSize = 1 << ((int)ceil(log2(N)) + 1);
    for (int i = 0; i < treeSize; i++)
    {
      segmentTree[i] = 0L;
    }
    for (int i = 0; i < N; i++)
    {
      limits[i] = 0;
      dest[i].clear();
      road[i].clear();
      LbyRoad[i] = 0;
      AbyRoad[i] = 0;
      queriesByCityW[i].clear();
      queriesByCityI[i].clear();
    }

    for (int i = 0; i < N - 1; i++)
    {
      cin >> x >> y >> l >> a;
      x--;
      y--;
      dest[x].push_back(y);
      road[x].push_back(i);

      dest[y].push_back(x);
      road[y].push_back(i);

      LbyRoad[i] = l;
      AbyRoad[i] = a;
      limits[i] = l;
    }

    sort(limits, limits + N);
    for (int i = 0; i < Q; i++)
    {
      int c;
      long long int w;
      cin >> c >> w;
      c--;
      queriesByCityI[c].push_back(i);
      queriesByCityW[c].push_back(w);
    }

    for (int i = 0; i < dest[0].size(); i++)
    {
      int nextD = dest[0][i];
      int r = road[0][i];
      long long int nextL = LbyRoad[r];
      long long int nextA = AbyRoad[r];
      int left = 0;
      int right = N - 1;
      int mid;
      while (left < right)
      {
        mid = (left + right + 1) >> 1;
        if (limits[mid] > nextL)
        {
          right = mid - 1;
        }
        else
        {
          left = mid;
        }
      }
      update(nextA, 0, N - 1, left);
      computeFrom(0, nextD);
      update(0, 0, N - 1, left);
    }

    cout << "Case #" << t + 1 << ":";
    for (int i = 0; i < Q; i++)
    {
      cout << " " << ans[i];
    }
    cout << endl;
  }
  return 0;
}