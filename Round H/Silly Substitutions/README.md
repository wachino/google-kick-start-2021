# Silly Substitutions

## Solution code

See [solution source code](/Round%20H/Silly%20Substitutions/solution.js)

## Analysis

You can see [solution analysis](/Round%20H/Silly%20Substitutions/analysis.md) extracted from Google webpage.

## Problem

You are given a string **S** of length **N** which consists of digits `0-9`. You do the following operations on the string in the order given.

1. Find all the substrings 01 and replace each of them with 2.
2. Find all the substrings 12 and replace each of them with 3.
3. Find all the substrings 23 and replace each of them with 4.
4. Find all the substrings 34 and replace each of them with 5.
   .
   .
   .
5. Find all the substrings 89 and replace each of them with 0.
6. Find all the substrings 90 and replace each of them with 1.

You repeat this process in the same given order until none of the above operations change the string. For example, if **S** is 12 then we do not stop at operation 1 since it does not affect the string but perform operation 2 and change the string to 3. We can see that the string does not change further no matter how many times we repeat the above process.

Your task is to find how the final string will look like for the given **S**.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow. Each test case consists of two lines.

The first line of each test case contains an integer **N**, denoting the length of the string **S**.

The second line of each test case contains a string **S** of length **N**.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the final string obtained.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
The input string only consists of digits `0-9`.

### Test set 1

Time limit: 20 seconds.<br>
1 ≤ **N** ≤ 100.

### Test set 2

Time limit: 60 seconds.<br>
For at most 10 cases:<br>
1 ≤ **N** ≤ 5 × 10<sup>5</sup>.<br>
For the remaining cases:<br>
1 ≤ **N** ≤ 100.

## Sample

| Input       | Output         |
| ----------- | -------------- |
| 4           |                |
| 3           | Case #1: 22    |
| 012         |                |
| 4           | Case #2: 26    |
| 0145        |                |
| 5           | Case #3: 00000 |
| 00000       |                |
| 11          | Case #4: 1     |
| 98765432101 |                |

In Sample Case #1, substring `01` is replaced with `2` and the resulting string is `22` which is not affected further by any of the operations. Therefore final string is `22`.

In Sample Case #2, substring `01` is replaced with `2` and the resulting string is `245`. The substring `45` is replaced with `6` and the resulting string is `26` which is not further affected by any of the operations. Therefore final string is `26`.

In Sample Case #3, since the operations cannot be performed on the given string, the string does not change.

In Sample Case #4, all the operations can be performed sequentially on the string and the final string is `1`.
