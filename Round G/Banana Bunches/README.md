# Banana Bunches

## Solution code

See [solution source code](/Round%20G/Banana%20Bunches/solution.js)

## Analysis

You can see [solution analysis](/Round%20G/Banana%20Bunches/analysis.md) extracted from Google webpage.

## Problem

Barbara goes to Alan's banana farm, where the **N** banana trees are organized in one long line represented by an array **B**. The tree at position `i` has **B<sub>i</sub>** banana bunches. Each tree has the same cost. Once Barbara buys a tree, she gets all the banana bunches on that tree.<br>
Alan has a special rule: because he does not want too many gaps in his line, he allows Barbara to buy at most `2` contiguous sections of his banana tree line.

Barbara wants to buy some number of trees such that the total number of banana bunches on these purchased trees equals the capacity **K** of her basket. She wants to do this while spending as little money as possible. How many trees should she buy?

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.<br>
Each test case begins with a line containing two integers integer **N**, the number of trees on Alan's farm, and **K**, the capacity of Barbara's basket.<br>
The next line contains **N** non-negative integers **B<sub>1</sub>**,**B<sub>2</sub>**,…,**B<sub>N</sub>** representing array **B**, where the `i-`th integer represents the number of banana bunches on the `i-`th tree on Alan's farm.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the minimum number of trees Barbara must purchase to obtain **K** banana bunches using at most `2` contiguous sections of the farm, or `-1` if it is impossible to do so.

## Limits

Time limit: 20 seconds.<br>
Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
0 ≤ **B<sub>i</sub>** ≤ **K**, for each i from 1 to **N**.

### Test set 1

1 ≤ **K** ≤ 10<sup>4</sup>.<br>
1 ≤ **N** ≤ 50.

### Test set 2

1 ≤ **K** ≤ 10<sup>4</sup>.<br>
1 ≤ **N** ≤ 500.

### Test set 3

1 ≤ **K** ≤ 10<sup>6</sup>.

For at most 25 cases:<br>
1 ≤ **N** ≤ 5000.

For the remaining cases:<br>
1 ≤ **N** ≤ 500.

## Sample

| Input       | Output      |
| ----------- | ----------- |
| 4           |             |
| 6 8         | Case #1: 3  |
| 1 2 3 1 2 3 |             |
| 4 10        | Case #2: -1 |
| 6 7 5 2     |             |
| 6 8         | Case #3: 4  |
| 3 1 2 1 3 1 |             |
| 4 6         | Case #4: 3  |
| 3 1 2 0     |             |

In Sample Case #1, the first section can contain the trees at indices `2` and `3`, and the second section can contain the tree at index `6`.

In Sample Case #2, it is impossible to achieve a sum of 10 with `2` contiguous sections.

In Sample Case #3, the first section can contain the trees at indices `{1,2}`, and the second section can contain the trees at indices `{5,6}`. We cannot take the `2 + 3 + 3` combo (trees at indices `{1,3,5}`) since that would be `3` contiguous sections.

In Sample Case #4, the only section contains the trees at indices `{1,2,3}`.
