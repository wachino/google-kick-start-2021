# Analysis

## Test Set 1

Say `P(n)` denotes the number of primes up to `n`, then the number of possible products of consecutive primes will be `P(n)−1`. For this test set, we can find all the primes up to `n=2021` and generate the list of products of consecutive primes. Each query can then be answered by searching for the largest product which is still smaller than or equal to the given query.

_Complexity analysis_:

1. To generate primes, we can test all i up to n for primality by checking if any integer from `2` to `i−1` divides i. This takes <code>∑<sup>n−2</sup><sub>i=0</sub>i=O(n<sup>2</sup>)</code>
1. Generating the list of products of consecutive primes from the prime list takes `O(n)` (a tighter bound will be `O(P(n))` but we do not require it for this case)
1. To answer all the queries, the complexity is `O(T×n)`

So, the total complexity is <code>O(n<sup>2</sup>)+O(T×n)</code> which is well under the required time limit for `n=2021`.

## Test Set 2

We do not need to generate all the primes up to n, but only until we find a prime which is greater than (√n). The product of consecutive primes larger than (√n) will be greater than n. For this test set, n can be up to 10<sup>9</sup>, so we can generate primes up to 10<sup>5</sup> (rounding off 10<sup>4.5</sup> to cover the one up case as well) using [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).

_Complexity analysis_: <code>O((√n)×log(log(√n)))</code> (for sieve) + <code>O(T×P(√n))</code> (for queries) which is well under the required time limit for <code>n=10<sup>9</sup></code>.

## Test Set 3

Our previous strategy of generating primes up to (√n) will not work in this case as (√n) can be as large as 10<sup>9</sup>.

For any input `n`, there can be only two scenarios:

- The solution is the product of the largest prime smaller than or equal to (√n) and the smallest prime greater than (√n). Product of consecutive primes larger than that will be larger than n.
- The solution is the product of two largest primes smaller than or equal to (√n). This will be less than n and any product of consecutive primes less than that will be even smaller.

So, we need primes only in the vicinity of (√n), specifically in the worst case, 2 primes smaller than or equal to (√n) and one prime larger than (√n).

Now, how far out can the closest prime be from any given (√n)? This series of numbers is known as [maximal prime gaps](https://en.wikipedia.org/wiki/Prime_gap) and for (√n)=10<sup>9</sup> (for maximum possible n=10<sup>18</sup>), this number is 282 (called `max_gap` from now on). So, we can iterate backwards from (√n) until we find 2 primes and then iterate ahead from (√n) for 1 more prime. In the worst case we would need to check integers in range [(√n)−max_gap×2,(√n)+max_gap].

_Complexity analysis_: ![O( \sqrt[4]{n} \times 3 \times max_gap \times T)](https://render.githubusercontent.com/render/math?math=O%28%20%5Csqrt%5B4%5D%7Bn%7D%20%5Ctimes%203%20%5Ctimes%20max%5C_gap%20%5Ctimes%20T%29)<br>
(primality check over 3×max_gap possible integers for T test cases)

_Note_: The above complexity is not a tight bound. It's hard to hit the worst case scenario and even then most of the primality checks will terminate earlier (using just the first 7 primes, we can rule out 662 integers in any 3×282 range). A better [primality test](https://en.wikipedia.org/wiki/Primality_test) can be used to further drive the complexity down. [Segmented sieve](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Segmented_sieve) can also be used to have deterministic complexity - ![O( ( \sqrt[4]{n} + 3 \times max_gap \times T) \times \log( \log( \sqrt[4]{n})))](https://render.githubusercontent.com/render/math?math=O%28%20%28%20%5Csqrt%5B4%5D%7Bn%7D%20%2B%203%20%5Ctimes%20max%5C_gap%20%5Ctimes%20T%29%20%5Ctimes%20%5Clog%28%20%5Clog%28%20%5Csqrt%5B4%5D%7Bn%7D%29%29%29).

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1KbHddT2PRiwU4EK269qnYF1Bfa2iW4zf80c1HzcTHy92LPt4WD91aF1pZdEQ/test_data.zip).
