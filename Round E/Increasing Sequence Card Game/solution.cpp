#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
#include <math.h>
#include <iomanip>

using namespace std;

int main()
{
  int T;
  long long int N;
  double precompute[1000001];
  double sum;
  precompute[1] = 1.0;
  sum = 1.0;
  for (int i = 2; i <= 1000000; i++)
  {
    precompute[i] = sum / double(i) + 1.0;
    sum += precompute[i];
  }
  cin >> T;
  for (int t = 0; t < T; t++)
  {
    cin >> N;

    double ans;
    if (N <= 1000000)
    {
      ans = precompute[N];
    }
    else
    {
      ans = precompute[1000000] + log(N + 1) - log(1000001);
    }
    cout << "Case #" << t + 1 << ": " << setprecision(10) << fixed << ans << endl;
  }

  return 0;
}
