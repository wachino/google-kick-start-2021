# Simple Polygon

## Solution code

See [solution source code](/Round%20G/Simple%20Polygon/solution.js)

## Analysis

You can see [solution analysis](/Round%20G/Simple%20Polygon/analysis.md) extracted from Google webpage.

## Problem

You are given two integers, the number of vertices **N** and area **A**. You need to construct a [simple polygon](https://en.wikipedia.org/wiki/Simple_polygon) of **N** vertices such that the area of the polygon is exactly **A**/2, and all the vertices have non-negative integer coordinates with value up to 10<sup>9</sup>.

A simple polygon is one that:

- Defines a closed area.
- Does not have self-intersections, even at a single point.
- No two consecutive edges form a straight angle.

## Input

The first line of the input gives the number of test cases, **T**. **T** lines follow. The first line of each test case contains two integers, **N** denoting the number of vertices and **A**, denoting double the required area of the polygon.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is `IMPOSSIBLE` if it is not possible to construct a polygon with the given requirements and `POSSIBLE` otherwise.

If you output `POSSIBLE`, output **N** more lines with `2` integers each. The `i-`th line should contain two integers X<sub>i</sub> and Y<sub>i</sub> which denote the coordinates of the `i-`th vertex. For each i, the coordinates should satisfy the 0 ≤ X<sub>i</sub>,Y<sub>i</sub> ≤ 10<sup>9</sup> constraints. Vertices of the polygon should be listed in consecutive order ( vertex<sub>i</sub> should be adjacent to vertex<sub>i−1</sub> and vertex<sub>i+1</sub> in the polygon).

If there are multiple possible solutions, you can output any of them.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
1 ≤ **A** ≤ 10<sup>9</sup>.

### Test set 1

Time limit: 20 seconds.<br>
3 ≤ **N** ≤ 5.

### Test set 2

Time limit: 40 seconds.<br>
3 ≤ **N** ≤ 1000.

## Sample

| Input | Output              |
| ----- | ------------------- |
| 2     |                     |
| 4 36  | Case #1: POSSIBLE   |
|       | 2 5                 |
|       | 6 5                 |
|       | 8 2                 |
|       | 0 2                 |
| 5 2   | Case #2: IMPOSSIBLE |

![Simple Polygon](/images/round-g-simple-polygon-1.png)

In Sample Case #1, we can output the above quadrilateral with coordinates (2,5), (6,5), (0,2) and (8,2). The area of this quadrilateral is equal to 18.

In Sample Case #2, there is no way to construct a polygon with 5 vertices and area equal to 1.
