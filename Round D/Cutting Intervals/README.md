# Cutting Intervals

## Solution code

See [solution source code c++](/Round%20D/Cutting%20Intervals/solution.cpp)

See [solution source code js](/Round%20D/Cutting%20Intervals/solution.js)

## Analysis

You can see [solution analysis](/Round%20D/Cutting%20Intervals/analysis.md) extracted from Google webpage.

## Problem

You are given **N** intervals. An interval can be represented by two positive integers **L<sub>i</sub>** and **R<sub>i</sub>** - the interval starts at **L<sub>i</sub>** and ends at **R<sub>i</sub>**, represented as [**L<sub>i</sub>**,**R<sub>i</sub>**]. Intervals may not be unique, so there might be multiple intervals with both equal **L<sub>i</sub>** and equal **R<sub>i</sub>**.

You are allowed to perform a maximum of **C** cuts. `A` cut at `X` will cut all intervals `[L,R]` for which `L < X` and `X < R`. Cutting an interval at `X` is defined as splitting the interval into two intervals - `[L,X]` and `[X,R]`. Note that cuts can only be performed at integer points. Also, cutting at an endpoint of an interval (`X=L` or `X=R`) has no effect and does not split the interval.

You need to find the maximum number of intervals that can be obtained through a maximum of **C** cuts.

## Input

The first line of the input contains the number of test cases, **T**. **T** test cases follow.

Each test case starts with a line containing two integers, **N** and **C**, denoting the number of intervals and the maximum number of cuts you can perform respectively. **N** lines follow.
The i-th line contains two integers **L<sub>i</sub>** and **R<sub>i</sub>**, describing the i-th interval.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the maximum number of intervals that can be obtained through at most **C** cuts, as described above.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>

### Test set 1

Time limit: 20 seconds.<br>
1≤**N**≤500.<br>
1≤**C**≤105.<br>
1≤**L<sub>i</sub>**<**R<sub>i</sub>**≤10<sup>4</sup> for all `i`.

### Test set 2

Time limit: 40 seconds.<br>
1≤**N**≤10<sup>5</sup>.<br>
1≤**C**≤10<sup>18</sup>.<br>
1≤**L<sub>i</sub>**<**R<sub>i</sub>**≤10<sup>13</sup> for all `i`.

## Sample

| Input | Output     |
| ----- | ---------- |
| 1     |            |
| 3 3   | Case #1: 7 |
| 1 3   |            |
| 2 4   |            |
| 1 4   |            |

In the provided sample, cuts should be performed at `2` and `3` to get the maximum number of intervals.<br>
After the first cut at 2, the intervals would be `{[1,2],[2,3],[2,4],[1,2],[2,4]}`.<br>
After the second cut at 3, the intervals would be `{[1,2],[2,3],[2,3],[3,4],[1,2],[2,3],[3,4]}`.<br>
It can be seen that no interval can be cut further, so the answer is `7`.
