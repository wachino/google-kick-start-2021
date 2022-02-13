# Analysis

Formally the problem can be written as: given an array of size **N**, select at most two non-overlapping subarrays, such that, sum of all the selected elements is equal to **K**. We need to minimise the sum of lengths of these two subarrays. We can calculate the prefix sum of the given array in `O(N)`. Prei denotes the sum of all the elements from 1 to i. The sum of elements in a particular `subarray(i,j)` is given by Pre<sub>j</sub> − Pre<sub>i−1</sub> and can be calculated in `O(1)` time.

One special case is when there is an element equal to **K** in the given array. In this case, we can return `1` as the answer and can be done in a `O(N)` traversal. For all the other cases, we can get the answer by selecting two non-overlapping subarrays.

## Test Set 1

For this test set, we can consider all possible pair of subarrays as constraints on **N** are small. The total number of pair of subarrays are O(**N**<sup>4</sup>). For each pair of non-overlapping subarrays, one can check whether the sum of elements in these subarrays is equal to **K**. Formally, consider all `(i, j, x, y)` such that sum of `subarray(i,j)` and `subarray(x,y)` is equal to **K** and `i ≤ j < x ≤ y`. Among all such pairs of subarrays, the optimal answer is the pair with the minimum sum of length of the subarrays. Formally, we need to minimise `j − i + 1 + y − x + 1` over all such pairs. For each pair, one can calculate the sum and length of these subarrays in O(1). Hence, the overall complexity of the solution is O(N<sup>4</sup>).

## Test Set 2

For this test set, we cannot consider all possible pair of subarrays as this solution would time out with the given constraints. We can iterate on all possible `(i, j, x)` and find an optimal index `y` such that sum of subarray(i,j) and subarray(x,y) is equal to **K** and `i ≤ j < x ≤ y`. For a particular `(i, j, x)` we need to find smallest index `y` such that Pre<sub>j</sub>−Pre<sub>i−1</sub>+Pre<sub>y</sub>−Prex−1=**K**. This can be done by performing a binary search on indexes from `x` to **N**. If there is no such index `y`, we can ignore this triplet. Among all such possible `(i, j, x, y)` quadruples, we need to minimise `j − i + 1 + y − x + 1`. We are able to find an optimal index `l` in O(log **N**) time complexity for a particular triplet `(i, j, x)`. There are O(**N**<sup>3</sup>) such triplets. Hence, the overall complexity of the solution is O(**N**<sup>3</sup>log **N**).

We can further reduce the complexity by using two pointers instead of binary search. We can consider all possible `(j, x)` and then use two pointer approach to find optimal `y` for each `i`. For each pair `(j, x)`, we perform O(N) operations. Hence, the overall complexity of the solution is O(N<sup>3</sup>).

## Test set 3

For this test set, we can store the optimal second subarray length for each sum and iterate over each possible first subarray.

Consider the following pseudocode:

```bash
  for i = 0 to K:
    Best[i] = inf
  ans = inf
  for i = N to 1:
    currSum = 0
    for j = i to 1:
      // |currSum| denotes sum of subarray(j, i).
      currSum += B[j]
      if currSum <= K:
        // Best[K - currSum] denotes the minimum length of subarray starting after index i which has sum equal to K - currSum.
        ans = min(ans, j - i + 1 + Best[K - currSum])

    currPostSum = 0
    for x = i to N:
      // |currPostSum| denotes sum of subarray(i, x).
      currPostSum += B[x]
      if currPostSum <= K:
        // Update the minimum length of subarray with sum equal to |currPostSum|.
        Best[currPostSum] = min(Best[currPostSum], x - i + 1)

```

When we are iterating from **N** to 1 and are at index `i` currently, _Best<sub>S</sub>_ stores the minimum length of subarray starting at any index greater than `i` and having sum `S`. Basically, this would denote the optimal length of second subarray with sum `S` if we choose first subarray ending at index `i`. We consider all indexes `j` from `1` to `i`. If sum of subarray `(j, i)` is `currSum` (such that <code>currSum ≤ **K**</code>), we update the answer. Then, we update the minimum length for each sum for the subarrays starting at index `i`. We do this by iterating for `x` from `i` to **N**. If sum of `subarray(i,x)` is `currPostSum`, then update <code>Best<sub>currPostSum</sub> = min(Best<sub>currPostSum</sub>, x − i + 1)</code>. As <code>K ≤ 10<sup>6</sup></code>, we can maintain an array for storing `Best`. This would allow updating and looking up the sum in O(1) time. For each index we do O(N) operations, hence the overall complexity is O(N<sup>2</sup> + **K**).

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U2235gifiqX_XxA9R3e1omhLkYM3OPVBpiURW18amYykERI4T0fUoYYV_IWpqw/test_data.zip).
