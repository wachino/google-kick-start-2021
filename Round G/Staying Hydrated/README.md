# Staying Hydrated

## Solution code

See [solution source code](/Round%20G/Staying%20Hydrated/solution.js)

## Analysis

You can see [solution analysis](/Round%20G/Staying%20Hydrated/analysis.md) extracted from Google webpage.

## Problem

With online classes in full swing, it is important for Grace to take breaks and keep herself hydrated at all times. She has decided to place a water bottle in her room in the most convenient place. This means that the position of this water bottle should be close to all the places in the room where she generally hangs out like the study desk, bed and coffee table among other places.

The room is represented in the form of a coordinate plane. The number of steps Grace needs to go from Point A to Point B is equal to the Manhattan distance between the 2 points. This means, Grace can only walk parallel to the axes of the coordinate plane and with each step, she can move one unit in either of the four directions.

Can you help her find a position in the room to keep the bottle, such that the sum of steps from the bottle to all her favourite furniture pieces will be minimum?

Notes:

- All the furniture (like study desk, bed, or coffee table) can be represented as rectangles of non-zero area in the plane with edges parallel to the axes.
- It is possible for furniture pieces to overlap, as she likes to work on her bed-table too.
- Assume that Grace can simply pass through the furniture while walking and does not need to go around them.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.
The first line of each test case contains an integer **K** which represents the number of objects in Grace's room.

**K** lines follow, each of them describing one object. The i-th line contains four integers, **x<sub>i,1</sub>**, **y<sub>i,1</sub>**, **x<sub>i,2</sub>**, **y<sub>i,2</sub>**, where (**x<sub>i,1</sub>**, **y<sub>i,1</sub>**) represents coordinates of the bottom left corner and (**x<sub>i,2</sub>**, **y<sub>i,2</sub>**) represents coordinates of the top right corner of the `i`-th rectangular object.

## Output

For each test case, output one line containing `Case #i: x y`, where i is the test case number (starting from 1) and `x` and `y` are coordinates of the water bottle such that the sum of steps from these coordinates to all the furniture pieces will be minimum.

Note, the bottle can lie on the floor or on top of any furniture but should be placed on integer coordinates only.
If multiple solutions exist, output the one with minimum `x` coordinate, if multiple solutions have the same `x` coordinate output the one with minimum `y` coordinate.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
**x<sub>i,1</sub>** < **x<sub>i,2</sub>**, for all i.<br>
**y<sub>i,1</sub>** < **y<sub>i,2</sub>**, for all i.

### Test set 1

Time limit: 40 seconds.<br>
1 ≤ **K** ≤ 20.<br>
−100 ≤ **x<sub>i,1</sub>**,**x<sub>i,2</sub>**,**y<sub>i,1</sub>**,**y<sub>i,2</sub>** ≤ 100, for all i.

### Test set 2

Time limit: 90 seconds.<br>
1 ≤ **K** ≤ 10<sup>5</sup><br>
−109 ≤ **x<sub>i,1</sub>**,**x<sub>i,2</sub>**,**y<sub>i,1</sub>**,**y<sub>i,2</sub>** ≤ 10<sup>9</sup>, for all `i`.

## Sample

_Note: there are additional samples that are not run on submissions down below._

| Input   | Output       |
| ------- | ------------ |
| 2       |              |
| 3       | Case #1: 1 3 |
| 0 0 1 1 |              |
| 2 3 4 6 |              |
| 0 3 5 9 |              |
| 1       | Case #2: 0 0 |
| 0 0 1 1 |              |

![Staying Hydrated](/images/round-g-staying-hydrated-1.jpeg)

In Sample Case #1, Grace can place the bottle at coordinates `(1, 3)`. It is at a distance of `2` steps from first object, `1` step from second and `0` steps from the third one which gives us `3` as the minimum possible sum of steps from a point.

In Sample Case #2, the water bottle can lie anywhere on the object itself but coordinates `(0, 0)` correspond to the minimum `x` and `y` coordinates.
