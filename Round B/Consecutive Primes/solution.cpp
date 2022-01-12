#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
#include <set>
#include <map>
#include <math.h>

using namespace std;

bool isPrime(long long p)
{
  for (long long int i = 2; i <= floor(sqrt(p)); i++)
  {
    if (p % i == 0)
    {
      return false;
    }
  }
  return true;
}

int main()
{
  int T;
  long long int Z;
  cin >> T;
  for (int t = 0; t < T; t++)
  {
    cin >> Z;
    long long int a = ceil(sqrt(Z));
    long long int b = a - 1;
    while (!isPrime(a))
    {
      a++;
    }
    while (!isPrime(b))
    {
      b--;
    }
    if (a * b > Z)
    {
      a = b - 1;
      while (!isPrime(a))
      {
        a--;
      }
    }

    cout << "Case #" << t + 1 << ": " << a * b << endl;
  }

  return 0;
}