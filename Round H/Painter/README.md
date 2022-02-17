# Painter

## Solution code

See [solution source code](/Round%20H/Painter/solution.js)

## Analysis

You can see [solution analysis](/Round%20H/Painter/analysis.md) extracted from Google webpage.

## Problem

You have recently started to study how to paint, and in one of the first classes you learned about the three primary colors: _Red_, _Yellow_, and _Blue_. If you combine these colors, you can produce many more colors. For now, the combinations that you have studied are the following:

- _Red_ + _Yellow_ = _Orange_
- _Red_ + _Blue_ = _Purple_
- _Yellow_ + _Blue_ = _Green_
- _Red_ + _Yellow_ + _Blue_ = _Gray_

You still do not understand shades of colors, therefore the proportion and order of each color in the combination does not matter. For example, combining Red and _Yellow_ produces the same result as combining _Yellow_ and _Red_, as well as the same result as combining _Red_, _Yellow_, and _Red_ again.

To practice your skills, you want to paint a 1-dimensional painting **P** of length **N**. Your painting consists of **N** squares. From left to right, **P<sub>i</sub>** represents the color of the i-th square. Initially all squares are Uncolored, that is, **P<sub>i</sub>** = Uncolored for every 1 ≤ i ≤ **N**.

In a single stroke, you can choose one of the three primary colors and apply it to a sequence of consecutive squares. In other words, you can choose a color `c` and two integers `l` and `r`, such that <code>1 ≤ l ≤ r ≤ **N**</code>, and apply color `c` to all squares **P<sub>j</sub>** such that `l ≤ j ≤ r`. If the square being painted is currently Uncolored, then its color will become `c`. Otherwise, the color will be a combination of all the colors applied on this square so far and the new color `c`, as described in the list above.

In order to save time, you want to use as few strokes as possible. Given the description of the painting that you want to paint, figure out what is the minimum number of strokes required to paint it.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

Each test case starts with a line containing an integer **N**, representing the length of the painting. Then on the next line, there will be a string **P** of length **N**, representing the painting. The i-th character represents the color of square **P<sub>i</sub>**, according to the following list:

- `U` = _Uncolored_
- `R` = _Red_
- `Y` = _Yellow_
- `B` = _Blue_
- `O` = _Orange_
- `P` = _Purple_
- `G` = _Green_
- `A` = _Gray_

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the minimum number of strokes required to paint the painting.

## Limits

Memory limit: 1 GB.<br>
1 ≤ T ≤ 100.<br>
1 ≤ N ≤ 10<sup>5</sup>.

### Test set 1

Time limit: 20 seconds.<br>
**P<sub>i</sub>** will be one of `{Y, B, G}`.

### Test set 2

Time limit: 40 seconds.<br>
**P<sub>i</sub>** will be one of `{U, R, Y, B, O, P, G, A}`.

## Sample

_Note: there are additional samples that are not run on submissions down below._

| Input     | Output     |
| --------- | ---------- |
| 2         |            |
| 9         | Case #1: 3 |
| YYYBBBYYY |            |
| 6         | Case #2: 2 |
| YYGGBB    |            |

In Sample Case #1, the solution is to make `3` strokes: the first one using color Yellow from square `1` through `3`, the second one using color Blue from square `4` through `6`, and the third one using color Yellow from square 7 through `9`. Notice that this particular painting required only primary colors.

In Sample Case #2, the solution is to make 2 strokes: the first one using color Yellow from square `1` through `4`, and the second one using color Blue from square `3` through `6`. Notice that squares `3` and `4` will be painted with both colors Yellow and Blue, which will result on it being Green.

## Additional Sample - Test Set 2

_The following additional sample fits the limits of Test Set 2. It will not be run against your submitted solutions._

| Input | Output     |
| ----- | ---------- |
| 1     |            |
| 5     | Case #1: 3 |
| ROAOR |            |

In Sample Case #3, the solution is to make `3` strokes: the first one using color Red from square `1` through `5`, the second one using color Yellow from square 2 through `4`, and the third one using color Blue on square `3`. Notice that square `3` is painted with all three primary colors, which will result in it being Gray.
