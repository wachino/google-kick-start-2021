# Longest Progression

## Solution code

See [solution source code](/Round%20B/Longest%20Progression/solution.js)

## Analysis

You can see [solution analysis](/Round%20B/Longest%20Progression/analysis.md) extracted from Google webpage.

## Problem

In [Kick Start 2020 Round E](https://github.com/wachino/google-kick-start-2020/tree/master/Round%20E/Longest%20Arithmetic) (you do not need to know anything about the previous problem to solve this one) Sarasvati learned about arithmetic arrays. An arithmetic array is an array that contains at least two integers and the differences between consecutive integers are equal. For example, `[9,10]`, `[3,3,3]`, and `[9,7,5,3]` are arithmetic arrays, while `[1,3,3,7]`, `[2,1,2]`, and `[1,2,4]` are not.

Sarasvati again has an array of N non-negative integers. The i-th integer of the array is **A<sub>i</sub>**. She can replace at most one element in the array with any (possibly negative) integer she wants.

For an array **A**, Sarasvati defines a subarray as any contiguous part of **A**. Please help Sarasvati determine the length of the longest possible arithmetic subarray she can create by replacing at most one element in the original array.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow. Each test case begins with a line containing the integer **N**. The second line contains **N** integers. The i-th integer is **A<sub>i</sub>**.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the length of the longest arithmetic subarray.

## Limits

Time limit: 30 seconds.<br>
Memory limit: 1 GB.<br>
1≤**T**≤100<br>
0≤**A<sub>i</sub>**≤10<sup>9</sup>.

### Test set 1

2≤**N**≤2000

### Test set 2

2≤**N**≤3×10<sup>5</sup> for at most 10 test cases.<br>
For the remaining cases, 2≤**N**≤2000.

## Sample

| Input             | Output     |
| ----------------- | ---------- |
| 3                 |            |
| 4                 | Case #1: 4 |
| 9 7 5 3           |            |
| 9                 | Case #2: 6 |
| 5 5 4 5 5 5 4 5 6 |            |
| 4                 | Case #3: 4 |
| 8 5 2 0           |            |

In Sample Case #1, the whole array is an arithmetic array, thus the longest arithmetic subarray is the whole array.

In Sample Case #2, if Sarasvati changes the number at third position to `5`, the array will become `[5,5,5,5,5,5,4,5,6]`. The subarray from first position to sixth position is the longest arithmetic subarray.

In Sample Case #3, Sarasvati can change the number at the last position to `−1`, to get `[8,5,2,−1]`. This resulting array is arithmetic.
