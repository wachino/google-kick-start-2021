# Smaller Strings

## Solution code

See [solution source code](/Round%20C/Smaller%20Strings/solution.js)

## Analysis

You can see [solution analysis](/Round%20C/Smaller%20Strings/analysis.md) extracted from Google webpage.

## Problem

You are given an integer **K** and a string **S** of length **N**, consisting of lowercase letters from the first **K** letters of the English alphabet. Find the number of palindrome strings of length **N** which are lexicographically smaller than S and consist of lowercase letters from the first **K** letters of the English alphabet.

A string composed of ordered letters <code>a<sub>1</sub>,a<sub>2</sub>,…,a<sub>n</sub></code> is lexicographically smaller than another string of the same length <code>b<sub>1</sub>,b<sub>2</sub>,…,b<sub>n</sub></code> if <code>a<sub>i</sub>\<b<sub>i</sub></code>, where `i` is the first index where characters differ in the two strings. For example, the following strings are arranged in lexicographically increasing order: `aaa`, `aab`, `aba`, `cab`.

A palindrome is a string that is the same written forwards and backwards. For example, `anna`, `racecar`, `aaa` and `x` are all palindromes, while `ab`, `frog` and `yoyo` are not.

As the number of such strings can be very large, print the answer modulo 10<sup>9</sup>+7.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

Each test case consists of two lines. The first line contains two integers **N** and **K**. The second line contains a string **S** of length **N**, consisting of lowercase letters.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the number of lexicographically smaller palindrome strings modulo <code>10<sup>9</sup>+7</code>.

## Limits

Memory limit: 1 GB.<br>
1≤**T**≤100.<br>
The string **S** consists of lowercase letters from the first **K** letters of the English alphabet.

### Test set 1

Time limit: 20 seconds.<br>
1≤**N**≤8.<br>
1≤**K**≤5.

### Test set 2

Time limit: 10 seconds.<br>
1≤**N**≤10<sup>5</sup>.<br>
1≤**K**≤26.

## Sample

| Input | Output     |
| ----- | ---------- |
| 3     |            |
| 2 3   | Case #1: 2 |
| bc    |            |
| 5 5   | Case #2: 8 |
| abcdd |            |
| 1 5   | Case #3: 3 |
| d     |            |

In Sample Case #1, the palindromes are `["aa", "bb"]`.

In Sample Case #2, the palindromes are `["aaaaa", "aabaa", "aacaa", "aadaa", "aaeaa", "ababa", "abbba", "abcba"]`.

In Sample Case #3, the palindromes are `["a", "b", "c"]`.
