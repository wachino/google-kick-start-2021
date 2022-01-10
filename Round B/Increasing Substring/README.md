# Increasing Substring

## Solution code

See [solution source code](/Round%20B/Increasing%20Substring/solution.js)

## Analysis

You can see [solution analysis](/Round%20B/Increasing%20Substring/analysis.md) extracted from Google webpage.

## Problem

Your friend John just came back from vacation, and he would like to share with you a new property that he learned about strings.

John learned that a string `C` of length `L` consisting of uppercase English characters is strictly increasing if, for every pair of indices `i` and `j` such that `1 ≤ i < j ≤ L` (1-based), the character at position `i` is smaller than the character at position `j`.

For example, the strings `ABC` and `ADF` are strictly increasing, however the strings `ACC` and `FDA` are not.

Now that he taught you this new exciting property, John decided to challenge you: given a string `S` of length `N`, you have to find out, for every position `1≤i≤N`, what is the length of the longest strictly increasing [substring](https://en.wikipedia.org/wiki/Substring) that ends at position `i`.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

Each test case consists of two lines.

The first line contains an integer **N**, representing the length of the string.

The second line contains a string **S** of length **N**, consisting of uppercase English characters.

## Output

For each test case, output one line containing <code>Case #x: y<sub>1</sub> y<sub>2</sub> ... y<sub>n</sub></code>, where `x` is the test case number (starting from 1) and y<sub>i</sub> is the length of the longest strictly increasing substring that ends at position `i`.

## Limits

Memory limit: 1 GB.<br>
1≤**T**≤100.

### Test set 1

Time limit: 20 seconds.<br>
1≤**N**≤100.

### Test set 2

Time limit: 40 seconds.<br>
1≤**N**≤2×10<sup>5</sup>.

## Sample

| Input  | Output               |
| ------ | -------------------- |
| 2      |                      |
| 4      | Case #1: 1 2 1 2     |
| ABBC   |                      |
| 6      | Case #2: 1 2 1 2 3 1 |
| ABACDA |                      |

In Sample Case #1, the longest strictly increasing substring ending at position 1 is `A`. The longest strictly increasing substrings ending at positions `2`, `3` and `4` are `AB`, `B` and `BC`, respectively.

In Sample Case #2, the longest strictly increasing substrings for each position are `A`, `AB`, `A`, `AC`, `ACD` and `A`.
