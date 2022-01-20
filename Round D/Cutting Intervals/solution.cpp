#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
#include <set>
#include <map>
#include <math.h>

using namespace std;

struct interval
{
  long long count;
  long long length;
};

long long int points[200002];
long long int starts[100002];
long long int endings[100002];
interval counting[200002];
int main()
{
  int T;
  long long int N, C, L, R, ans;
  cin >> T;
  for (int t = 0; t < T; t++)
  {
    cin >> N >> C;
    ans = N;
    int h = 0;
    for (int i = 0; i < N; i++)
    {
      cin >> L >> R;
      if (L + 1L < R)
      {
        points[2 * h] = L + 1L;
        points[2 * h + 1] = R;
        starts[h] = (L + 1L);
        endings[h] = (R);
        h++;
      }
    }
    sort(points, points + 2 * h);
    sort(starts, starts + h);
    sort(endings, endings + h);
    int ps = unique(points, points + 2 * h) - points;

    for (int i = 0; i < ps - 1; i++)
    {
      counting[i] = {.count = 0, .length = (points[i + 1]) - (points[i])};
    }
    long long int currInts = 0L;
    int s = 0;
    int e = 0;
    for (int i = 0; i < ps - 1; i++)
    {
      long long int p = points[i];

      while (s < h && starts[s] == p)
      {
        currInts++;
        s++;
      }
      while (e < h && endings[e] == p)
      {
        currInts--;
        e++;
      }
      counting[i].count += currInts;
    }
    sort(counting, counting + ps - 1, [](interval a, interval b)
         { return (b.count < a.count); });
    long long int cuts = 0L;
    int i = 0;
    long long int ans = N;
    while (i < ps - 1 && cuts < C)
    {
      long long int nextCut = min(C - cuts, counting[i].length);
      cuts += nextCut;
      ans += nextCut * counting[i].count;
      i++;
    }
    cout << "Case #" << t + 1 << ": " << ans << endl;
  }

  return 0;
}