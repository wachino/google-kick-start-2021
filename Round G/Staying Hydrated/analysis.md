# Analysis

The [Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry) between a point **P** = (x,y) and an axis-parallel rectangle R with the lower-left corner <code>(x<sub>1</sub>,y<sub>1</sub>)</code> and the upper-right corner <code>(x<sub>2</sub>,y<sub>2</sub>)</code> is <code>d(P,R) = max(x<sub>1</sub>−x, x−x<sub>2</sub>,0) + max(y<sub>1</sub>−y, y−y<sub>2</sub>, 0)</code>. Intuitively, the first term represents the minimal horizontal movement from **P** to the nearest point inside the x-interval [x<sub>1</sub>,x<sub>2</sub>], which could be 0 if **P** itself is in that interval. Similarly, the second term represents the minimal vertical movement from **P** to the nearest point inside the `y-`interval [y<sub>1</sub>,y<sub>2</sub>].

## Test Set 1

In this test set, the furnished area of the room is so small that we can afford testing every point **P** = (x,y) in the range −100 ≤ x, y ≤ 100 and select the point with the smallest total distance to all rectangular objects. The time complexity of such a brute-force algorithm is O(**K**WH), where **K** is the number of input objects and `W` and `H` is the width and the height of the smallest axis-parallel rectangle covering all input rectangles. Note that it is not necessary to test any points outside this covering rectangle as moving from such a point towards the covering rectangle would reduce the distance to all input rectangular objects. The time complexity can be further improved to O(**K**(W + H)) if we realize that the optimal `x-` and `y-`coordinates are in fact independent and can be calculated separately.

## Test Set 2

In this test set, the furnished area of the room may be huge, therefore, even the improved version of the brute-force algorithm would be too slow. However, with a little bit of sorting, we can find the optimal location of the bottle without ever computing any distances.

Let us consider finding the optimal `x-`coordinate of the bottle (the optimal `y-`coordinate can be found in the same way). Imagine that we are seeking the optimal location by sweeping the coordinate plane from left to right. Suppose we are currently at the position `x` and let `a(x)` be the number of rectangles that are strictly ahead of `x`, i.e. <code>x < x<sub>1</sub></code>, where <code>x<sub>1</sub></code> is the left coordinate of the rectangle. Similarly, let `b(x)` be the number of rectangles that are behind `x` in the non-strict sense, namely, <code>x<sub>2</sub> ≤ x</code>. Now, if `a(x) > b(x)`, then `x` is not the optimal location as moving one step to the right would reduce the total horizontal distance to the rectangles by `a(x) − b(x) > 0`.

What happens to the value of `a(x) − b(x)` as we sweep the plane from left to right? For a sufficiently small `x`, which is strictly to the left from all rectangles, <code>a(x) = **K**</code> and `b(x) = 0`, and therefore, <code>a(x) − b(x) = **K** > 0</code>. Conversely, for a sufficiently large `x`, it is the other way around and <code>a(x) − b(x) = −**K** < 0</code>. And since `a(x)` is a decreasing function while `b(x)` is an increasing function, the difference `a(x) − b(x)` is also a decreasing function. What does it mean for our plane sweeping approach? As long as `a(x) − b(x) > 0`, we should keep moving to the right as, by doing so, we are reducing the total distance to the rectangles. But as soon as `a(x) − b(x) ≤ 0`, we have found the optimal `x-`coordinate, since further reduction of the total distance is not possible.

In summary, we have reduced the task of calculating the optimal Manhattan distance to finding the smallest `x` with `a(x) − b(x) ≤ 0`. This can be done by iterating through the left and right coordinates of rectangles in sorted non-decreasing order and maintaining the values of functions `a(x)` and `b(x)`. The time complexity of this algorithm is dominated by the sorting, and is therefore O(**K** log**K**).

Left as an exercise to the reader: This problem can also be solved in O(**K**) by using [linear-time selection algorithms](https://en.wikipedia.org/wiki/Selection_algorithm). Though both our test sets should pass with the above O(**K** log**K**) approach.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U2imhEVF_ed6vcRJC4NRd_rsAuTnd4MpYPFgUc11n_VBxChNesN0ZvItC8hMWw/test_data.zip).
