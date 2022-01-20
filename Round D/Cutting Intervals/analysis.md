# Analysis

We are given **N** intervals and are asked to find the maximum number of intervals we can obtain if we perform a maximum of **C** cuts. There are a few key observations required to solve this problem.

First, performing a cut at the same point `X` more than once will not result in any additional intervals. After the initial cut, all intervals which contained `X` will now be split into intervals that have `X` as an endpoint, and thus cannot be cut further at `X`.

Second, a cut at `X` will result in the same number of additional intervals regardless of the number of cuts performed earlier at other points. This implies that at most N additional intervals can be obtained with each cut.

Based on the aforementioned observations, we can solve this problem as follows. Let A<sub>j</sub> represent the number of points at which performing a cut will result in `j` additional intervals (0 ≤ `j` ≤ **N**). Iterating over `A` in reverse order, we perform the cuts greedily, adding <code>j⋅min(A<sub>j</sub>,C)</code> to our result, and decrementing `C` by <code>min(A<sub>j</sub>,C)</code> until `C=0`. The final answer is the result.

Iterating over `A` can be done in <code>O(**N**)</code>. Now, we will go over how to populate `A` for the two test sets.

## Test Set 1

For this test set, we can iterate over each point coordinate and count the number of intervals it lies strictly within, i.e. for each <code>X∈[min(L<sub>i</sub>),max(R<sub>i</sub>)]</code>, we count the number of intervals such that **L<sub>i</sub>** < `X` < **R<sub>i</sub>**. Let that number be `k`. Then, we increment A<sub>k</sub>.

This can be performed in <code>O(**N**⋅max(**R<sub>i</sub>**))</code>.

## Test Set 2

For this test set, the above solution would exceed the time limits.

We observe that the number of additional intervals obtained by a cut at two consecutive points `X` and `X+1` are the same, except, possibly, when some intervals start or end at these points. We can construct a sorted map M<sub>X</sub> which maps the coordinate `X` to the number of additional intervals it lies within as compared to `X−1`. That is, for each starting interval endpoint **L<sub>i</sub>**, we increment <code>M<sub>**L<sub>i</sub>**+1</sub></code>. And for each ending interval endpoint **R<sub>i</sub>**, we decrement M<sub>**R<sub>i</sub>**</sub>.

Consider an example with the following intervals: `[3,7],[1,5],[4,7]`. The mappings created are <code>M<sub>2</sub>=1</code>,<code>M<sub>4</sub>=1</code>,<code>M<sub>5</sub>=0</code>, and <code>M<sub>7</sub>=−2</code>: because one interval begins at <code>1 (M<sub>2</sub> += 1)</code>, one interval begins at <code>3 (M<sub>4</sub> += 1)</code>, one interval begins at <code>4 (M<sub>5</sub> += 1)</code>, one intervals ends at <code>5 (M<sub>5</sub> -= 1)</code> and two intervals end at <code>7 (M<sub>7</sub> -= 2)</code>.

Finally, we iterate over the map in sorted order of keys, keeping track of the number of overlapping intervals j, the previous key k<sub>prev</sub>, and the current key k<sub>curr</sub>. We increment A<sub>j</sub> by k<sub>curr</sub>−k<sub>prev</sub>. Now A<sub>j</sub> can be used to compute the final solution as described above.

In the above example, we iterate over the keys of `M`, and start with `j=0`. All points smaller than the first key (2) will produce zero additional intervals.<br>
We increment `j` by M<sub>2</sub> and go to the next key. Now `j=1`,k<sub>curr</sub>=4,k<sub>prev</sub>=2. We increment A<sub>j</sub>=A<sub>1</sub> by k<sub>curr</sub>−k<sub>prev</sub>=2, because the 2 points `(2, 3)` will produce 1 additional interval if we perform a cut on them.<br>
Now we increment `j` by M<sub>4</sub> and go to the next key. Now `j=2`,k<sub>curr</sub>=5,k<sub>prev</sub>=4. We increment A<sub>2</sub> by 1, because there is 1 point (4) at which performing cuts will result in 2 additional intervals.<br>
Then, we increment j by M<sub>5</sub>=0 and go to the next key, so `j=2`,k<sub>curr</sub>=7,k<sub>prev</sub>=5. Again we increment A<sub>2</sub> by 2, because the points 5, 6 also result in 2 additional intervals.<br>
Finally we increment j by M<sub>7</sub>=−2 and end.
The final result is A<sub>1</sub>=2,A<sub>2</sub>=3, and we can start performing greedy cuts.

Constructing the map requires adding 2⋅**N** endpoints to it, with each addition requiring <code>O(log(**N**))</code>. Therefore, the overall time complexity is <code>O(N⋅log(**N**))</code>.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U0r4T5bAykhQINMBG1QAW0CPSxnxU6xbs6t4kSScDA1Vak9fPnT9jy68NIZLn4/test_data.zip).
