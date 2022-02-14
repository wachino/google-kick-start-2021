# Analysis

According to [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem), the area of a simple polygon having integer vertex coordinates is `Area = i + b/2 − 1`, where i is the number of integer points inside the polygon and b is the number of integer points on its border. If we double this area, as in our problem statement, it follows that <code>**A** = 2 × Area = 2i + b − 2</code>. Since i ≥ 0 and b ≥ N, a lower bound on the 'doubled-area' A of a polygon with **N** vertices is <code>**A** = 2i + b − 2 ≥ **N** − 2</code>. Therefore, if <code>**A** < **N** − 2</code>, the answer is `IMPOSSIBLE`. In what follows, we will show that this is a tight lower bound by constructing an **N** vertex simple polygon having a 'doubled-area' **A** for any given <code>**A** ≥ **N** − 2</code>.

## Test Set 1

There are many ways to construct the necessary polygons. The following drawing shows possible constructions for 3 ≤ **N** ≤ 5.

![Simple Polygon](/images/round-g-simple-polygon-analysis-1.png)

These polygons have no internal integer points, therefore, by Pick's theorem, their 'doubled-area' is `b − 2`. For example, for **N** = 5, we can verify that <code>b = **A** + 2</code> by counting the integer points on the border. <br>Therefore, the 'doubled-area' is <code>b − 2 = **A** + 2 − 2 = **A**</code>, which validates our construction. Similarly, it can be verified that we have achieved the desired area for N=3 and N=4 as well.

The time complexity of the construction is O(1).

## Test Set 2

For **N** > 5, the construction is a little more involved. Let us start with the base case, where the 'doubled-area' of the polygon is the smallest possible, namely, **N** − 2. The following drawing illustrates the construction for 6 ≤ **N** ≤ 10, but it can be generalized for arbitrary **N** by extending the zig-zag shape to the right.

![Simple Polygon](/images/round-g-simple-polygon-analysis-2.png)

The base polygon has **N** integer points on the border and no internal integer points, therefore, its 'doubled-area' is **N** − 2. If <code>**A** > **N** − 2</code>, we just need to introduce <code>**A** − **N** + 2</code> more points on the border by say, lifting the top-left vertex up <code>**A** − **N** + 2</code> units as shown in the following drawing for **N** = 10 and **A** = 10.

![Simple Polygon](/images/round-g-simple-polygon-analysis-3.png)

The time complexity of the construction is O(N).

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U3s7QqddafJzA4d73Sr3hhzBO7KwnFdb-ULEc9lYaOL-vsVEwvzTV9_4aaI84c/test_data.zip).
