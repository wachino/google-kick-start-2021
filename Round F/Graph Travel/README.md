# Graph Travel

## Solution code

See [solution source code](/Round%20F/Graph%20Travel/solution.js)

## Analysis

You can see [solution analysis](/Round%20F/Graph%20Travel/analysis.md) extracted from Google webpage.

## Problem

Ada lives in a magic country A, and she is studying at Magic University. Today, Ada wants to collect magic points in a special space.

The space has **N** rooms (0,1,…,**N** − 1). There are **M** corridors connecting the rooms. A corridor `j` connects room **X<sub>j</sub>** and room **Y<sub>j</sub>**, meaning you can travel between the two rooms.

The `i`-th room contains **A<sub>i</sub>** magic points and is protected by a magic shield with properties **L<sub>i</sub>** and **R<sub>i</sub>**. To enter the `i`-th room, first you need to get to any room adjacent to the `i`-th room (i.e. connected to it by a corridor) through rooms with already broken shields. Then you have to break the shield to this room, but you can break the shield if and only if you have between **L<sub>i</sub>** and **R<sub>i</sub>** magic points, inclusive. After you break the shield, you will enter the room and automatically collect the Ai magic points assigned to this room. The room will not generate new magic points. The room will also not generate a new shield after it is broken, so you can freely go back to every room with already broken shields regardless of the amount of points you have.

Ada starts with `0` magic points and her goal is to find a way to collect exactly **K** magic points. She can start in any room, and end in any room. The room she chooses to start in will automatically have its magic shield broken, and she will automatically collect all the magic points from this room.

After inspecting the map of the rooms and corridors, Ada thinks the task is very easy, so she wants to challenge herself with a more difficult task. She wants to know how many unique ways there are to reach the goal. Two ways are different if their unique paths are different. The unique path is the order of rooms in which she broke the shields, e.g.: if you visit the rooms in the order (`1,3,2,1,3,5,3,6`), the unique path is (`1,3,2,5,6`).

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.<br>
For each test case, the first line contains three integers **N**, **M**, and **K**: the number of rooms, the numbers of corridors, and the numbers of magic points we want to collect, respectively.<br>
The next **N** lines contain three integers **L<sub>i</sub>**, **R<sub>i</sub>**, and **A<sub>i</sub>**: The magic shield properties **L<sub>i</sub>** and **R<sub>i</sub>** of room `i`, and the number of magic points **A<sub>i</sub>**, respectively.
The next **M** lines contain two integers **X<sub>j</sub>** and **Y<sub>j</sub>**: the rooms that are connected by corridor `j`.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the number of ways to collect **K** magic points.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
0 ≤ **M** ≤ **N**×(**N**−1)/2.<br>
0 ≤ **X<sub>j</sub>**, **Y<sub>j</sub>** ≤ **N**−1.<br>
**X<sub>j</sub>** ≠ **Y<sub>j</sub>**<br>
Each pair of rooms can be connected by at most one corridor.

### Test set 1

Time limit: 20 seconds.<br>
1 ≤ **N** ≤ 8.<br>
1 ≤ **K** ≤ 100.<br>
0 ≤ **L<sub>i</sub>** ≤ **R<sub>i</sub>** ≤ 50.<br>
1 ≤ **A<sub>i</sub>** ≤ 50.

### Test set 2

Time limit: 60 seconds.<br>
1 ≤ **N** ≤ 15.<br>
1 ≤ **K** ≤ 2 × 10<sup>9</sup>.<br>
0 ≤ **L<sub>i</sub>** ≤ **R<sub>i</sub>** ≤ 10<sup>9</sup>.<br>
1 ≤ **A<sub>i</sub>** ≤ 10<sup>9</sup>.

## Sample

| Input | Output     |
| ----- | ---------- |
| 3     |            |
| 4 3 3 | Case #1: 4 |
| 1 3 1 |            |
| 1 1 1 |            |
| 2 4 1 |            |
| 2 3 1 |            |
| 0 1   |            |
| 1 2   |            |
| 2 3   |            |
| 4 5 3 | Case #2: 8 |
| 1 3 1 |            |
| 1 1 1 |            |
| 2 4 1 |            |
| 2 3 1 |            |
| 0 1   |            |
| 1 2   |            |
| 2 3   |            |
| 3 0   |            |
| 0 2   |            |
| 4 1 2 | Case #3: 4 |
| 0 4 1 |            |
| 0 4 1 |            |
| 0 4 2 |            |
| 0 4 2 |            |
| 0 1   |            |

In the first case, there are 4 different ways. They are:

![Graph Travel](/images/round-f-graph-travel-1.png)

In the second case, there are 8 different ways. They are:

![Graph Travel](/images/round-f-graph-travel-2.png)

In the third case, there are 4 different ways. They are:

![Graph Travel](/images/round-f-graph-travel-3.png)
