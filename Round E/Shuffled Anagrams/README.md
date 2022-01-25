# Shuffled Anagrams

## Solution code

See [solution source code](/Round%20E/Shuffled%20Anagrams/solution.js)

## Analysis

You can see [solution analysis](/Round%20E/Shuffled%20Anagrams/analysis.md) extracted from Google webpage.

## Problem

Let **S** be a string containing only letters of the English alphabet. An anagram of **S** is any string that contains exactly the same letters as **S** (with the same number of occurrences for each letter), but in a different order. For example, the word kick has anagrams such as `kcik` and `ckki`.

Now, let S[i] be the i-th letter in **S**. We say that an anagram of **S**, A, is _shuffled_ if and only if for all i, `S[i] ≠ A[i]`. So, for instance, `kcik` is not a shuffled anagram of kick as the first and fourth letters of both of them are the same. However, `ckki` would be considered a shuffled anagram of kick, as would `ikkc`.

Given an arbitrary string **S**, your task is to output any one shuffled anagram of **S**, or else print `IMPOSSIBLE` if this cannot be done.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow. Each test case consists of one line, a string of English letters.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is a shuffled anagram of the string for that test case, or `IMPOSSIBLE` if no shuffled anagram exists for that string.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
All input letters are lowercase English letters.

### Test set 1

Time limit: 20 seconds.<br>
1 ≤ the length of **S** ≤ 8.

### Test set 2

Time limit: 40 seconds.<br>
1 ≤ the length of **S** ≤ 10<sup>4</sup>.

## Sample

| Input | Output              |
| ----- | ------------------- |
| 2     |                     |
| start | Case #1: tarts      |
| jjj   | Case #2: IMPOSSIBLE |

In test case #1, `tarts` is a shuffled anagram of `start` as none of the letters in each position of both strings match the other. Another possible solution is `trsta` (though you only need to provide one solution). However, in test case #2, there is no way of anagramming `jjj` to form a shuffled anagram, so `IMPOSSIBLE` is printed instead.
