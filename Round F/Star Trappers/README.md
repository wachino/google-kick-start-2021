# Star Trappers

## Solution code

See [solution source code](/Round%20F/Star%20Trappers/solution.js)

## Analysis

You can see [solution analysis](/Round%20F/Star%20Trappers/analysis.md) extracted from Google webpage.

## Problem

John and Ada are sitting on the grass above a small hill. It is midnight and the sky is full of stars. The sky looks like a 2D plane from so far away and the stars look like points on that plane. Ada loves blue stars and suddenly she notices one, while all the other stars in the sky are white. She loves the blue star so much that she wants to trap it. And she asks John for help.

Ada will tell John the position of the blue star and he has to trap it. To trap it, John has to draw a polygon in the sky with his buster sword, so that the blue star is strictly inside the polygon (not on the border of the polygon) and the polygon has the smallest possible perimeter. The vertices of the polygon must be the white stars.

Even though John is super awesome, he needs your help. Given the positions of the white stars and the blue star, you need to find out whether John can trap the blue star and if he can, also find the minimum length of the perimeter of the polygon he will use.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.<br>
For each test case, the first line contains an integer **N**, it denotes the number of white stars in the sky.<br>
The next **N** lines will each contain two integers, Xi and Yi. The i-th pair of integers denotes the x and y coordinates of the i-th star in the sky.<br>
After these **N** lines, there will be one last line, which will contain two integers, **X<sub>s</sub>** and **Y<sub>s</sub>**, which denote the `x` and `y` coordinates of the blue star.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the minimum length of the perimeter of the polygon drawn to trap the shooting star. If it is impossible for John to draw a polygon that traps the star, then `y` should be `IMPOSSIBLE`.

y will be considered correct if it is within an absolute or relative error of 10<sup>−6</sup> of the correct answer. See the [FAQ](https://codingcompetitions.withgoogle.com/kickstart/faq#how-does-kick-start-handle-real-numbers) for an explanation of what that means, and what formats of real numbers we accept.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
0 ≤ **X<sub>i</sub>,Y<sub>i</sub>** ≤ 10<sup>6</sup>, for all i.<br>
0 ≤ **X<sub>s</sub>,Y<sub>s</sub>** ≤ 10<sup>6</sup>.<br>
No two stars (including the blue star) will have the same position.

### Test set 1

Time limit: 5 seconds.<br>
1 ≤ **N** ≤ 10.

### Test set 2

Time limit: 5 seconds.<br>
1 ≤ **N** ≤ 45.

### Test set 3

Time limit: 50 seconds.<br>
For at most 10 test cases:<br>
1 ≤ **N** ≤ 300.

For the remaining test cases:<br>
1 ≤ **N** ≤ 60.

## Sample

| Input    | Output        |
| -------- | ------------- |
|2||
|2|Case #1: IMPOSSIBLE|
|0 0||
|5 0||
|2 2||
|3|Case #2: 17.071068|
|0 0||
|5 0||
|0 5||
|1 1||

In the first test case we have only two white stars, so we cannot draw any polygons.

In the second test case we have three white stars, so we can draw only one polygon (a triangle), as shown in the picture below. It turns out that we are able to catch the blue star in this polygon. The length of the perimeter of this polygon is ![5 + 5 + 5\sqrt{2} \approx 17.071068](https://render.githubusercontent.com/render/math?math=5%20%2B%205%20%2B%205%5Csqrt%7B2%7D%20%5Capprox%2017.071068).

![Star Trappers](/images/round-f-star-trappers-1.png)

