# K-Goodness String

## Solution code

See [solution source code](/Round%20A/K-Goodness%20String/solution.js)

## Analysis

You can see [solution analysis](/Round%20A/K-Goodness%20String/analysis.md) extracted from Google webpage.

## Problem

Charles defines the goodness score of a string as the number of indices `i` such that <code>S<sub>i</sub>≠S<sub>N−i+1/<sub></code> where `1≤i≤N/2` (1-indexed). For example, the string `CABABC` has a goodness score of 2 since <code>S<sub>2</sub>≠S<sub>5</sub></code> and <code>S<sub>3</sub>≠S<sub>4</sub></code>.

Charles gave Ada a string **S** of length **N**, consisting of uppercase letters and asked her to convert it into a string with a goodness score of **K**. In one operation, Ada can change any character in the string to any uppercase letter. Could you help Ada find the _minimum_ number of operations required to transform the given string into a string with goodness score equal to **K**?

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

The first line of each test case contains two integers **N** and **K**. The second line of each test case contains a string **S** of length **N**, consisting of uppercase letters.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the minimum number of operations required to transform the given string `S` into a string with goodness score equal to `K`.

## Limits

Memory limit: 1 GB.<br>
1≤**T**≤100.<br>
0≤**K**≤**N**/2.

### Test set 1

Time limit: 20 seconds.<br>
1≤**N**≤100.

### Test set 2

Time limit: 40 seconds.<br>
1≤**N**≤2×10<sup>5</sup> for at most 10 test cases.<br>
For the remaining cases, 1≤**N**≤100.

## Sample

| Input | Output     |
| ----- | ---------- |
| 2     |            |
| 5 1   | Case #1: 0 |
| ABCAA |            |
| 4 2   | Case #2: 1 |
| ABAA  |            |

In Sample Case #1, the given string already has a goodness score of `1`. Therefore the minimum number of operations required is `0`.

In Sample Case #2, one option is to change the character at index `1` to `B` in order to have a goodness score of `2`. Therefore, the minimum number of operations required is `1`.
