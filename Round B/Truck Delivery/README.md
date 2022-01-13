# Truck Delivery

## Solution code

See [solution source code c++](/Round%20B/Truck%20Delivery/solution.cpp)
See [solution source code js](/Round%20B/Truck%20Delivery/solution.js)

## Analysis

You can see [solution analysis](/Round%20B/Truck%20Delivery/analysis.md) extracted from Google webpage.

## Problem

Charles is a truck driver in the city of Googleland. Googleland is built in form of a tree with **N** nodes where each node represents a city and each edge represents a road between two cities. The cities are numbered 1 to **N**. The capital of Googleland is city 1. Each day Charles picks up a load of weight **W** in city **C** and wants to deliver it to city 1 using the simple path (which is unique) between the cities. Each road i has a toll which charges amount **A<sub>i</sub>** if the weight of the load is greater than or equal to a load-limit **L<sub>i</sub>**.

Charles works for **Q** days, where for each day Charles will be given the starting city **C** and weight of the load **W**. For each day find the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of all the toll charges that Charles pays for that day. If Charles did not have to pay in any of the tolls the answer is `0`.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

The first line of each test case contains the two integers **N** and **Q**.

The next **N**−1 lines describe the roads. i-th of these lines contains the four space separated integers **X**, **Y**, **L<sub>i</sub>** and **A<sub>i</sub>**, indicating a road between cities **X** and **Y** with load-limit **L<sub>i</sub>** and toll charge **A<sub>i</sub>**.

The next **Q** lines describe the queries. j-th of these lines contains the two space separated integers **C<sub>j</sub>** and **W<sub>j</sub>** representing the starting city and weight of the load on j-th day.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is a list of the answers for **Q** days in order, separated by spaces.

## Limits

Memory limit: 1 GB.<br>
1≤**T**≤100.<br>
1≤**L<sub>i</sub>**≤2×105, for all i.<br>
1≤**A<sub>i</sub>**≤1018, for all i.<br>
All **L<sub>i</sub>** are distinct.<br>
2≤**C<sub>j</sub>**≤**N**, for all j.<br>
1≤**W<sub>j</sub>**≤2×10<sup>5</sup>, for all j.<br>
It is guaranteed that given roads form a tree.

### Test set 1

Time limit: 20 seconds.<br>
2≤**N**≤1000.<br>
1≤**Q**≤1000.

### Test set 2

Time limit: 80 seconds.<br>
2≤**N**≤5×104 and 1≤**Q**≤10<sup>5</sup> for at most 20 test cases.<br>
For the remaining cases, 2≤**N**≤1000 and 1≤**Q**≤1000.

## Sample

| Input    | Output             |
| -------- | ------------------ |
| 2        |                    |
| 7 5      | Case #1: 1 4 0 5 7 |
| 2 1 2 4  |                    |
| 2 3 7 8  |                    |
| 3 4 6 2  |                    |
| 5 3 9 9  |                    |
| 2 6 1 5  |                    |
| 7 1 5 7  |                    |
| 5 10     |                    |
| 5 8      |                    |
| 4 1      |                    |
| 6 1      |                    |
| 7 6      |                    |
| 3 2      | Case #2: 10 5      |
| 1 2 2 10 |                    |
| 3 2 3 5  |                    |
| 3 2      |                    |
| 3 3      |                    |

In Sample Case #1

On the first day, Charles should pay toll charges in the roads between cities `(5,3)`,`(3,2)` and `(2,1)`. The answer will be `gcd(9,8,4)=1`.

On the second day, Charles should pay toll charges in the roads between cities `(3,2)` and `(2,1)`. The answer will be `gcd(8,4)=4`.

On the third day, Charles need not pay toll charges in any of the cities. Thus, the answer will be `0`.

In Sample Case #2

On the first day, Charles should pay toll charges in the roads between cities `(2,1)`. The answer will be `10`.

On the second day, Charles should pay toll charges in the roads between cities `(3,2)` and `(2,1)`. The answer will be `gcd(5,10)=5`.
