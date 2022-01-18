# Binary Operator

## Solution code

See [solution source code](/Round%20C/Binary%20Operator/solution.js)

## Analysis

You can see [solution analysis](/Round%20C/Binary%20Operator/analysis.md) extracted from Google webpage.

## Problem

You are given a list of valid arithmetic expressions using non-negative integers, parentheses `()`, plus `+`, multiply `*`, and an extra operator `#`. The expressions are fully parenthesized and in [infix](https://en.wikipedia.org/wiki/Infix_notation) notation.

A fully parenthesized expression is an expression where every operator and its operands are wrapped in a single parenthesis.
For example, the expression `x+y` becomes `(x+y)` when fully parenthesized, and `x+y+z` becomes `((x+y)+z)`. However, `0` is still `0` when fully parenthesized, because it consists of a single number and no operators. `((x+y))` is not considered fully parenthesized because it has redundant parentheses.

The operators `+` and `*` denote addition and multiplication, and # can be any [total function](https://mathworld.wolfram.com/TotalFunction.html).

You want to group the expressions into [equivalence classes](https://en.wikipedia.org/wiki/Equivalence_class), where expressions are in the same equivalence class if and only if they are guaranteed to result in the same numeric value, regardless of which function `#` represents.

You can assume that `#` represents the same function across all expressions in a given test case. That might mean that `#` represents some known function like addition or subtraction, but not both in different parts of the same test case.

For example, consider the following expressions:

<code>F<sub>1</sub>=((1#(1+1))+((2#3)_2)) <br>
F<sub>2</sub>=(((2#3)+(1#2))+(2#3)) <br>
F<sub>3</sub>=((2_(2#3))+(1#2)).</code>

Let `A = 1#2`, and let `B = 2#3`. Then we can say <code>F<sub>1</sub>=F<sub>2</sub>=F<sub>3</sub></code>, regardless of the function `#` represents because the expressions can be rewritten as:

<code>F<sub>1</sub>=((1#2)+((2#3)*2))=(A+(B*2))=(A+2B)<br>
F<sub>2</sub>=(((2#3)+(2#3))+(1#2))=((B+B)+A)=(A+2B)<br>
F<sub>3</sub>=((2*(2#3))+(1#2))=((2*B)+A)=(A+2B).</code>

However, consider the expressions <code>F<sub>4</sub>=((0#0)+(0#0))</code> and <code>F<sub>5</sub>=(0#0)</code>. If # represents addition, then <code>F<sub>4</sub> = F<sub>5</sub></code>. However, if `#` is `f(x,y)=C`, such that `C` is a non-zero integer, then <code>F<sub>4</sub> ≠ F<sub>5</sub></code> since `2C≠C`. Therefore <code>F<sub>4</sub></code> and <code>F<sub>5</sub></code> are not in the same equivalence class.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow. Each test case begins with a line containing the integer **N**. **N** lines follow. i-th line contains one expression, **E<sub>i</sub>**.

## Output

For each test case, output one line containing <code>Case #x: Y<sub>1</sub>,Y<sub>2</sub>,…,Y<sub>N</sub></code>, where `x` is the test case number (starting from 1) and <code>Y<sub>i</sub></code> is the [lexicographically smallest](https://en.wikipedia.org/wiki/Lexicographic_order) sequence satisfying the conditions below:

1. 1≤Y<sub>i</sub>≤Z, where Z denotes the total number of equivalence classes in a given test case.
1. Y<sub>i</sub>=Y<sub>j</sub> if and only if **E<sub>i</sub>** and **E<sub>j</sub>** are in the same equivalence class.

## Limits

Time limit: 20 seconds.<br>
Memory limit: 1 GB.<br>
1≤ **T** ≤100<br>
1≤ **N** ≤100<br>
The length of **E<sub>i</sub>** is at most `100`, for all `i`.<br>
**E<sub>i</sub>** will be valid, for all `i`.

### Test set 1

No more than one `#` in each expression.

### Test set 2

No additional constraints.

## Sample

_Note: there are additional samples that are not run on submissions down below._

| Input                                          | Output                 |
| ---------------------------------------------- | ---------------------- |
| 3                                              |                        |
| 7                                              | Case #1: 1 2 1 2 2 1 2 |
| (1\*(1#2))                                     |                        |
| (0\*(1#2))                                     |                        |
| (1#2)                                          |                        |
| 0                                              | Case #2: 1 1 2 1 2     |
| (3\*0)                                         |                        |
| ((1#2)\*1)                                     |                        |
| (((1+(1#2))+3)\*0)                             |                        |
| 5                                              | Case #3: 1 1           |
| (1\*((1+(2#2))+3))                             |                        |
| ((0+(2#2))+4)                                  |                        |
| (100#2)                                        |                        |
| (((1+(2#2))+3)\*1)                             |                        |
| ((50\*2)#2)                                    |                        |
| 2                                              |                        |
| (9999999999999999999999999999999999999999+1)   |                        |
| (100000000000000000000\*100000000000000000000) |                        |

This sample test set contains `3` test cases.

Test case `1` has `7` expressions and a total of `2` equivalence classes, denoted <code>G<sub>1</sub></code> and <code>G<sub>2</sub></code>.

<code>E<sub>1</sub>=(1*(1#2)), E<sub>2</sub>=(0*(1#2)), …, E<sub>7</sub>=(((1+(1#2))+3)\*0).</code>

**E<sub>1</sub>**, **E<sub>3</sub>**, and **E<sub>6</sub>** belong to <code>G<sub>1</sub></code>, and **E<sub>2</sub>**, **E<sub>4</sub>**, **E<sub>5</sub>**, and **E<sub>7</sub>** belong to <code>G<sub>2</sub></code>.

There are `2` sequences of <code>Y<sub>i</sub></code> that satisfy the requirement about equivalence classes in test case 1: `2 1 2 1 1 2 1` and `1 2 1 2 2 1 2`.
Since `1 2 1 2 2 1 2` is the lexicographically smaller one, the output for test case 1 is: Case #1: `1 2 1 2 2 1 2`.

Test case `2` has `5` expressions and a total of `2` equivalence classes, denoted <code>G<sub>1</sub></code> and <code>G<sub>2</sub></code>.

**E<sub>1</sub>**, **E<sub>2</sub>**, and **E<sub>4</sub>** belong to <code>G<sub>1</sub></code>, and **E<sub>3</sub>** and **E<sub>5</sub>** belong to <code>G<sub>2</sub></code>.

Therefore, the output for test case 2 is: `Case #2: 1 1 2 1 2`.

Test case `3` has `2` expressions that do not contain any `#`.<br>
These two expressions evaluate to the same value, and therefore belong to the same equivalence class.

## Additional Sample - Test Set 2

_The following additional sample fits the limits of Test Set 2. It will not be run against your submitted solutions._

| Input                  | Output                     |
| ---------------------- | -------------------------- |
| 1                      |                            |
| 9                      | Case #1: 1 2 2 1 2 3 1 4 5 |
| ((2\*(2#3))+(1#2))     |                            |
| (0\*(1#2))             |                            |
| 0                      |                            |
| ((1#(1+1))+((2#3)\*2)) |                            |
| (3\*0)                 |                            |
| (1#(2#3))              |                            |
| (((2#3)+(1#2))+(2#3))  |                            |
| (4#7)                  |                            |
| (7#4)                  |                            |

In the provided sample, there are a total of 5 equivalence classes. The first expression in the input is `((2*(2#3))+(1#2))`. All expressions from its equivalence class are denoted with 1 in the output. The equivalence class denoted with `2` consists of `(0*(1#2))`, `0`, and `(3*0)`. The equivalence class denoted with `3` consists of `(1#(2#3))`. Finally, the last two expressions, `(4#7)` and `(7#4)`, are not equivalent to any of the prior expressions or to one another. Note that `2 1 1 2 1 3 2 5 4` is one of many other sequences that satisfy the requirement about equivalence classes the given input, but it is not a correct answer because this sequence is not the lexicographically smallest one.
