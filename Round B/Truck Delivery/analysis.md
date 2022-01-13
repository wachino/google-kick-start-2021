# Analysis

## Test Set 1

Let us root the tree at the capital city 1. For the small test set, we can answer each query by simply iterating the path from the given city **C<sub>j</sub>** up to the capital city. We start out with the answer `ans=0`, and whenever we encounter a road on the path with **Q<sub>i</sub>**≤**L<sub>j</sub>**, we update the answer to ans=gcd(ans,**A<sub>i</sub>**).

The time complexity of the Greatest Common Divisor (`GCD`) operation `gcd(a,b)` is `O(log(min(a,b)))` or `O(log(MaxA))` in our case, where `MaxA` is the largest toll among all roads. A short proof of `GCD` time complexity is provided here, and it can be generalized to show that the amortized time complexity of a sequence of K `GCD` operations, where the result of a previous operation is fed into the next one, is `O(K+log(MaxA))` as opposed to `O(K×log(MaxA))`. Since a path in the tree can have up to **N** cities, the overall time complexity of the algorithm for all **R** days is therefore <code>O(**R**×(**N**+log(MaxA)))</code>.

## Test Set 2

Since all queries are known in advance, we don't have to answer them in the given order, so let's group the queries by city **C<sub>j</sub>**.

Let's look at how we can answer all queries for a particular city `C` efficiently. First, we need to build a list of roads on the path from city `C` to the capital city 1 and sort them by the load-limits **Q<sub>i</sub>** in an increasing order. Let's also sort the queries for city `C` by load **L<sub>j</sub>** in a non-decreasing order. Now we can answer the queries by iterating these two lists in parallel and calculating `GCD` of all roads with load-limit up to and including the load **L<sub>j</sub>** of the current query.

The time complexity of this approach is <code>O(**N**<sup>2</sup>log(**N**)+**N**log(MaxA)+**R**log(**R**))</code> as we need to sort the list of roads from each city to the capital city 1, perform a series of `GCD` operations for each of these **N** paths, and also have the queries sorted by loads.

Rather than building paths to the capital for each city independently, we can perform a [Depth-first search](https://en.wikipedia.org/wiki/Depth-first_search) (`DFS`) of the tree starting at the capital city 1 and answer all queries of a city C as we visit the city for the first time. That way, the cities and roads on the path from C to 1 are conveniently stored in the `DFS` stack. All we need is an efficient data structure that would store the toll **A<sub>i</sub>** of precisely these roads and support `GCD` queries of tolls in the load-limit range [1,**L<sub>j</sub>**].

That data structure happens to be a [Segment Tree](https://en.wikipedia.org/wiki/Segment_tree) `ST` with load-limits **Q<sub>i</sub>** as keys (recall that all load-limits are unique), the tolls **A<sub>i</sub>** as values, and `GCD` as the merge operation. Initially, the segment tree `ST` is empty, namely, the values of all its nodes are 0. Whenever we traverse the i-th road, we perform a point update operation <code>ST.update(**Q<sub>i</sub>**,**A<sub>i</sub>**)</code>, and, when we backtrack along this road in the `DFS` traveral, we cancel the value **A<sub>i</sub>** by calling <code>ST.update(**Q<sub>i</sub>**,0)</code>>. By doing so, we ensure that at the time of answering queries for a particular city, the segment tree `ST` contains the tolls of precisely the roads on the path to the capital city 1, and the answer to a query is <code>ST.query(1,**L<sub>j</sub>**)</code>>.

Let `MaxQ` be the maximum load-limit among all roads. Each update or query of the segment tree involves `O(log(MaxQ))` `GCD` operations so the amortized time complexity of a single update or query operation is `O(log(MaxA)+log(MaxQ))`. Since we have two update operations per road and one query operation per each day, the overall time complexity of the algorithm is <code>O((**N**+**R**)×(log(MaxA)+log(MaxQ)))</code>>.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U0oEuyklOgK7ZlFTU5hPGRyHLm29BXcanguUq2e4_1oEfFB2--WHpv__4xspeM/test_data.zip).
