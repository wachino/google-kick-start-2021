# Birthday Cake

## Solution code

See [solution source code](/Round%20E/Birthday%20Cake/solution.js)

## Analysis

You can see [solution analysis](/Round%20E/Birthday%20Cake/analysis.md) extracted from Google webpage.

## Problem

You are given a grid of **R** rows and **C** columns that corresponds to a birthday cake.<br>
The rows are numbered from 1 to **R** starting from the top. The columns are numbered from 1 to **C** starting from the left. Each cell in the grid is a square of size 1×1.

You noticed that the most delicious part of the cake forms a single filled rectangle; that means all the cells inside this single rectangle will be delicious as well, but all the cells outside this rectangle are not delicious.
You have a knife that is long enough to make straight-line cuts of length up to **K**.

We want to make a series of cuts to extract each of the delicious cells separately, so that we can put candles on them, and enjoy the birthday party.<br>
To extract each of the delicious cells separately, they must be disconnected from any other cell.<br>
A cell is disconnected if no other cell is connected to it in any of the 4 directions (up, down, left, right).

A cut is a directed line segment which is valid if the following conditions are met:

- The cut runs along one of the horizontal or vertical lines between the rows and columns of the grid.
- The length of the cut must not exceed K.
- The starting and ending points of the cut must be grid points (i.e. a corner of a cell). In addition, the starting point must be already exposed, meaning that it lies on one of the 4 sides of the grid or on one of the previous cuts.
- The cut must not pass through any other exposed points. It may touch an exposed point, but if it does, it must end right there.

Suppose that **K** = 4. Below you can find five examples of valid cuts.

![Birthday Cake](/images/round-e-birthday-cake-1.png)

And here are four examples of invalid cuts

![Birthday Cake](/images/round-e-birthday-cake-2.png)

- In the first picture, the cut is too long (longer than 4).
- In the second picture, the cut starts from an unexposed point (neither one of the 4 sides of the grid nor a previous cut).
- In the third picture, the cut passes through an exposed point, it must stop once it touches the exposed point at length 2.
- The fourth picture is invalid because of the same reason as the third picture.

We need to find the minimum number of cuts needed to extract all the delicious cells.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

Each test case starts with a line containing three integers, **R**, **C** and **K**.<br>
The next line contains four integers, **r<sub>1</sub>**, **c<sub>1</sub>**, **r<sub>2</sub>**, **c<sub>2</sub>**, representing the top-left and bottom-right cell of the delicious rectangle respectively.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the minimum number of cuts.

## Limits

Time limit: 10 seconds.<br>
Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
1 ≤ **r<sub>1</sub>** ≤ **r<sub>2</sub>** ≤ **R**.<br>
1 ≤ **c<sub>1</sub>** ≤ **c<sub>2</sub>** ≤ **C**.

### Test set 1

1 ≤ **R,C** ≤ 100.<br>
**K** = 1.

### Test set 2

1 ≤ **R,C** ≤ 10<sup>5</sup>.<br>
1 ≤ **K** ≤ 10<sup>5</sup>.

## Sample

_Note: there are additional samples that are not run on submissions down below._

| Input   | Output     |
| ------- | ---------- |
| 1       |            |
| 3 3 1   | Case #1: 5 |
| 2 2 2 2 |            |

## Additional Sample - Test Set 2

_The following additional sample fits the limits of Test Set 2. It will not be run against your submitted solutions._

| Input   | Output     |
| ------- | ---------- |
| 1       |            |
| 2 3 4   | Case #1: 3 |
| 2 1 2 2 |            |

In the Sample Case, the minimum number of cuts is `5`. One of the possible series of cuts is as follows:

![Birthday Cake](/images/round-e-birthday-cake-3.png)

In the Additional Sample Case, the minimum number of cuts is `3`. One of the possible series of cuts is as follows:

![Birthday Cake](/images/round-e-birthday-cake-4.png)
