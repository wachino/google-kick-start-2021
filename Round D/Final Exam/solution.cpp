#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
#include <set>
#include <map>
#include <math.h>
#include <iterator>
using namespace std;

template <typename T>
typename set<T>::reverse_iterator rlower_bound(set<T> &s, const T x)
{
  if (s.empty())
    return s.rend();
  auto it = s.upper_bound(x);
  return make_reverse_iterator(it);
}

void split(set<long long int> &startings, set<long long int> &endings, long long int left, long long int right, long long int val)
{
  cout << ' ' << val;
  if (val == left)
  {
    startings.erase(left);
  }
  if (val == right)
  {
    endings.erase(right);
  }
  if (left <= val - 1)
  {
    endings.insert(val - 1);
  }
  if (right >= val + 1)
  {
    startings.insert(val + 1);
  }
}

int main()
{
  int T, N, M;
  long long int A, B, S;
  set<long long int> endings;
  set<long long int> startings;
  cin >> T;
  for (int t = 0; t < T; t++)
  {
    startings.clear();
    endings.clear();
    cin >> N >> M;
    for (int i = 0; i < N; i++)
    {
      cin >> A >> B;
      startings.insert(A);
      endings.insert(B);
    }
    cout << "Case #" << t + 1 << ":";
    for (int i = 0; i < M; i++)
    {
      cin >> S;
      auto startLeft = rlower_bound(startings, S);
      auto endLeft = rlower_bound(endings, S);
      auto endRight = endings.lower_bound(S);
      auto startRight = startings.lower_bound(S);
      if (startLeft != startings.rend())
      {
        if (endLeft != endings.rend() && *startLeft <= *endLeft)
        {
          if (startRight != startings.end() && (*startRight - S < S - *endLeft))
          {
            split(startings, endings, *startRight, *endRight, *startRight);
          }
          else
          {
            split(startings, endings, *startLeft, *endLeft, *endLeft);
          }
        }
        else
        {
          split(startings, endings, *startLeft, *endRight, S);
        }
      }
      else
      {
        split(startings, endings, *startRight, *endRight, *startRight);
      }
    }
    cout << endl;
  }

  return 0;
}
