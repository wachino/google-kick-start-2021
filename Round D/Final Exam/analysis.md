# Analysis

## Test set 1

For consistency, we will use `maxDifficulty` to represent the maximum difficulty of a problem which is equal to `1000` for this test set. As the difficulty of any problem can be at most `1000`, we can keep track of all the problems that can be used to test the students. This can be done by maintaining a boolean array `problemAvailable` of size `maxDifficulty` where `problemAvailable[i]` is true if a problem is still available for difficulty i. We can iterate over the given **N** sets of problems and for each set i, mark that a problem exists for each difficulty `x` such that **A<sub>i</sub>** ≤ `x` ≤ **B<sub>i</sub>**. As no two sets contain the problems with same difficulty level, we will iterate over a particular difficulty level at most once. Hence, we can fill the boolean array `problemAvailable` in O(`maxDifficulty`) time.

For each query `j`, we can iterate through all remaining problems and find out which problem has the difficulty d such that <code>abs(d − **S<sub>j</sub>**)</code> is minimum. This can be done in `O`(`maxDifficulty`) time. After finding such problem, we can remove this problem from the remaining problems by marking `problemAvailable[d]` as false. This can be done in constant time. Hence, we can answer each query in <code>O(maxDifficulty)</code> time. The overall complexity of the solution is <code>O(M × maxDifficulty)</code>.

## Test set 2

We cannot list problems with all possible difficulties as maximum difficulty can go upto 10<sup>18</sup> in this test set. As the problem sets contain problems with disjoint difficulties, we can store the problem sets as a range. This can be done by using a map where key denotes the starting value of the range of difficulty and value denotes the ending range of difficulty. To store the ranges from the initial problem sets, we would need insertion operation in map. Hence, we can store the ranges in <code>O(**N** × log**N**)</code> time complexity initially.

For a query `j`, we need to lookup into the map to find the problem with difficulty d such that <code>abs(d − **S<sub>j</sub>**)</code> is minimized. We can perform an upper bound operation on map. In `C++`, one can use [std::map::upper_bound](http://www.cplusplus.com/reference/map/map/upper_bound/) method. `upper_bound(z)` returns first element greater than `z`. Suppose <code>upper_bound(**S<sub>j</sub>**)</code> returned k-th element of the map. There are several cases that could occur:

- `k = 1`
  ![Final Exam k = 1 case](/images/round-d-final-exam-1.png)
  This means that there is no range in map which could contain **S<sub>j</sub>** as the first range in map contains all values greater than **S<sub>j</sub>**. Let the range corresponding to first entry by `(x,y)`. The problem with difficulty `x` will be the one with closest value to **S<sub>j</sub>**. Thus, we can choose problem with difficulty `x` for this query. We can now update this range to `(x+1,y)` as problem with difficulty `x` is not available anymore. If `x+1 > y`, we can remove this range.
- Let the range corresponding to (k−1)-th element in map be (l,r). There are two cases here:
  - <code>l ≤ **S<sub>j</sub>** ≤ r</code>.
    ![Final Exam l≤Sj≤r case](/images/round-d-final-exam-2.png)
    This means that the problem with difficulty **S<sub>j</sub>** exists. The answer to this query would be the problem with difficulty **S<sub>j</sub>**. As this problem is not available for the remaining queries, we can remove the range `(l,r)` and insert 2 separate ranges <code>(l,**S<sub>j</sub>**−1)</code> and <code>(**S<sub>j</sub>**+1,r)</code>. If any of the ranges is invalid, we can ignore that range.
  - <code>r < **S<sub>j</sub>**</code>.
    ![Final Exam r<**S<sub>j</sub>** case](/images/round-d-final-exam-3.png)
    This means that there is no problem with difficulty **S<sub>j</sub>**. If <code>**S<sub>j</sub>**−r≤x−**S<sub>j</sub>**</code>, then we can select the problem with difficulty r as it is closest to **S<sub>j</sub>**. We can update the range `(l,r)` to `(l,r−1)` if it is a valid range. Otherwise, we can select the problem with difficulty `x`. We can update the range `(x,y)` to `(x+1,y)` if it is a valid range.

Each query can lead to addition of at most 1 new entry into the map. Hence, the size of the map would be <code>O(**N**+**M**)</code>. We perform `O(1)` operations each of which takes <code>O(log(**N**+**M**)</code>) time to compute answer for a single query. So, we can answer **M** queries in <code>O(**M**×log(**N**+**M**))</code> time. Hence, the overall complexity of the solution is <code>O(**N**×log**N**+**M**×log(**N**+**M**))</code>.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U0oEyIz_76KV0gDrfv5JVGizKE6d22o1vxiJ550v2fIK-s5bwqFCQb123_Eth0/test_data.zip).
