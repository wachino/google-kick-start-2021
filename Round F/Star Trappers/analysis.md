# Analysis

## Test Set 1

Say, we have just one polygon and the point we need to capture (called P henceforth). We need a way to check if that point is inside the polygon or not. This problem is known as [Point in Polygon](https://en.wikipedia.org/wiki/Point_in_polygon) and ray casting is one of the standard ways to solve it. Now, for the first test set, we can generate all possible simple polygons and check the minimum perimeter polygon which contains the point. Following steps show how to generate all simple polygons:

1. Generate all distinct permutations from the given set of points (minimum 3 points). Treat each permutation as a polygon with points describing consecutive vertices of that polygon.
1. For each polygon, if any two edges intersect each other, discard that polygon.
1. All remaining permutations will describe all possible simple polygons.

_Runtime Analysis_: To generate `R` distinct permutations from **N** points will take **N** permutations `R` (called <code>P<sup>N</sup><sub>R</sub></code>) and then checking for intersection of any two edges will take `(R−1) × (R−2)`. Then for each polygon it will take (`R−1`) checks for ray casting. So, total runtime will be:
![O(\sum_{R=3}^{\mathbf{N}}\mathrm{P}^{\mathbf{N}}_R \times (R - 1) \times (R - 2) \times (R - 1. = O(\sum*{R=3}^{\mathbf{N}}\mathrm{P}^{\mathbf{N}}_R \times R^3) = O(\mathbf{N}! \times \mathbf{N}^3)](<https://render.githubusercontent.com/render/math?math=O(%5Csum_%7BR%3D3%7D%5E%7B%5Cmathbf%7BN%7D%7D%5Cmathrm%7BP%7D%5E%7B%5Cmathbf%7BN%7D%7D_R%20%5Ctimes%20(R%20-%201)%20%5Ctimes%20(R%20-%202)%20%5Ctimes%20(R%20-%201)%20%3D%20O(%5Csum_%7BR%3D3%7D%5E%7B%5Cmathbf%7BN%7D%7D%5Cmathrm%7BP%7D%5E%7B%5Cmathbf%7BN%7D%7D_R%20%5Ctimes%20R%5E3)%20%3D%20O(%5Cmathbf%7BN%7D!%20%5Ctimes%0A%5Cmathbf%7BN%7D%5E3)>).

Note: This might look like it will TLE but most of the checks would not be performed. We can improve this runtime, though, using [convex hull](https://en.wikipedia.org/wiki/Convex_hull). A convex hull of a simple polygon will always include the initial area of a simple polygon and will have smaller or equal perimeter. The runtime in that case will be:

![O(\sum_{R=3}^{\mathbf{N}}\mathrm{C}^{\mathbf{N}}_R \times (R \times log(R)) \times (R - 1))
= O(2^\mathbf{N} \times \mathbf{N}^2 \times log(\mathbf{N}))](<https://render.githubusercontent.com/render/math?math=O(%5Csum_%7BR%3D3%7D%5E%7B%5Cmathbf%7BN%7D%7D%5Cmathrm%7BC%7D%5E%7B%5Cmathbf%7BN%7D%7D_R%20%5Ctimes%20(R%20%5Ctimes%20log(R))%20%5Ctimes%20(R%20-%201))%0A%3D%20O(2%5E%5Cmathbf%7BN%7D%20%5Ctimes%20%5Cmathbf%7BN%7D%5E2%20%5Ctimes%20log(%5Cmathbf%7BN%7D))>)

## Test Set 2

Notice that if a point is inside a polygon with more than `4` points, we can reduce it to a triangle (`ABC` in the image below) or a quadrilateral (`ABCD` in the image below) which contains the point.

![Star Trappers Analysis](/images/round-f-star-trappers-analysis-1.jpeg)
![Star Trappers Analysis](/images/round-f-star-trappers-analysis-2.jpeg)

Note: It can be some other triangle/quadrilateral in the above polygon, the image is just for illustration.

So, we can generate all possible quadrilaterals and triangles and then check the minimum perimeter polygon which contains the point.

_Runtime Analysis_: We can generate all sets of points with set size being 4 (for quadrilateral) and 3 (for triangle) from the given set of points taking O(**N**<sup>4</sup> + **N**<sup>3</sup>) = O(**N**<sup>4</sup>). Checking "Point in Polygon" in this case will be constant time.

## Test Set 3

The observation required for this set is that if the point `P` is on one of the diagonals in the quadrilateral, it must be at the intersection of the diagonals. If it is not, then we can reduce the quadrilateral to a triangle with a lesser perimeter (as in the following diagram, quadrilateral `ABCD` can be reduced to triangle `ABC`).

![Star Trappers Analysis](/images/round-f-star-trappers-analysis-3.jpeg)

Another observation is that among the points collinear to `P` only one point closest to `P` on both side matters. Other points will always create quadrilateral with larger perimeter. So, all collinear segments of interest are unique.<br>
So, for this set we can check all the triangles first. Then to generate quadrilaterals, we can find the diagonals as:

1. Find polar angles of all points, treating `P` as origin.
1. Group all points with same polar angles in one equivalence class.
1. Choose the point closest to `P` in each equivalence class and discard rest of the points.
1. Now, generate line segments from the remaining points. For each polar angle between `[0,π)` radians (called `θ`), check if we have a point at `θ+π`. These two points make one line segment (note that `P` lies on this segment).
1. These line segments are treated as diagonals of the quadrilateral.

_Runtime Analysis_: The triangle case remains the same, taking O(**N**<sup>3</sup>). For quadrilateral, we will generate at most **N**/2 sets of points in O(**N**) and then we can check all combinations of these segments for possible quadrilateral candidates in O((**N**/2)<sup>2</sup>). So, total runtime will be:
O(**N**<sup>3</sup> + **N** + (**N**/2)<sup>2</sup>) = O(**N**<sup>3</sup>)

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U2foAVbhfMeLADnnC_aL7m3UU5_nmMBkDgUpQPvB1c1Cj1Xy-81LoMuz9-jA_8/test_data.zip).
