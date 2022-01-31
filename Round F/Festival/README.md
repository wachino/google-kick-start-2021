# Festival

## Solution code

See [solution source code](/Round%20F/Festival/solution.js)

## Analysis

You can see [solution analysis](/Round%20F/Festival/analysis.md) extracted from Google webpage.

## Problem

You have just heard about a wonderful festival that will last for **D** days, numbered from 1 to **D**. There will be **N** attractions at the festival. The `i-th` attraction has a happiness rating of hi and will be available from day <code>**s<sub>i</sub>**</code> until day <code>**e<sub>i</sub>**</code>, inclusive.

You plan to choose one of the days to attend the festival. On that day, you will choose up to **K** attractions to ride. Your _total happiness_ will be the sum of happiness ratings of the attractions you chose to ride.

What is the maximum total happiness you could achieve?

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

The first line of each test case contains the three integers, **D**, **N** and **K**. The next **N** lines describe the attractions. The i-th line contains <code>**h<sub>i</sub>**</code>, <code>**s<sub>i</sub>**</code> and <code>**e<sub>i</sub>**</code>.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the maximum total happiness you could achieve.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
1 ≤ **K** ≤ **N**.<br>
1 ≤ <code>**s<sub>i</sub>**</code> ≤ <code>**e<sub>i</sub>**</code> ≤ **D**, for all `i`.<br>
1 ≤ <code>**h<sub>i</sub>**</code> ≤ 3 × 10<sup>5</sup>, for all `i`.

### Test set 1

Time limit: 20 seconds.<br>
1 ≤ **N** ≤ 1000.<br>
1 ≤ **D** ≤ 1000.

### Test set 2

Time limit: 90 seconds.<br>
For at most 10 test cases:

1 ≤ **N** ≤ 3 × 10<sup>5</sup>.<br>
1 ≤ **D** ≤ 3 × 10<sup>5</sup>.

For the remaining cases, 1 ≤ **N**,**D** ≤ 1000.

## Sample

| Input    | Output        |
| -------- | ------------- |
| 2        |               |
| 10 4 2   | Case #1: 2300 |
| 800 2 8  |               |
| 1500 6 9 |               |
| 200 4 7  |               |
| 400 3 5  |               |
| 5 3 3    | Case #2: 700  |
| 400 1 3  |               |
| 500 5 5  |               |
| 300 2 3  |               |

In sample test case 1, the festival lasts **D** = 10 days, there are **N** = 4 attractions, and you can ride up to **K** = 2 attractions.

If you choose to attend the festival on the 6th day, you could ride the first and second attractions for a total happiness of `800 + 1500 = 2300`. Note that you cannot also ride the third attraction, since you may only ride up to **K** = 2 attractions. This is the maximum total happiness you could achieve, so the answer is `2300`.

In sample test case 2, the festival lasts **D** = 5 days, there are **N** = 3 attractions, and you can ride up to **K** = 3 attractions.

If you choose to attend the festival on the 3rd day, you could ride the first and third attractions for a total happiness of `400 + 300 = 700`. This is the maximum total happiness you could achieve, so the answer is `700`.
