# Palindromic Crossword

## Solution code

See [solution source code](/Round%20E/Palindromic%20Crossword/solution.js)

## Analysis

You can see [solution analysis](/Round%20E/Palindromic%20Crossword/analysis.md) extracted from Google webpage.

## Problem

A [crossword puzzle](https://en.wikipedia.org/wiki/Crossword) is a rectangular grid of black cells and letters A-Z like the one shown below.

![Palindromic Crossword](/images/round-e-palindromic-crossword-1.png)

Words in the crossword are defined as maximal vertical or horizontal segments of characters. In the crossword below, DO and ON are examples of words.

![Palindromic Crossword](/images/round-e-palindromic-crossword-2.png)

A palindromic crossword is one where every word is a [palindrome](https://en.wikipedia.org/wiki/Palindrome). Let **R<sub>i,j</sub>** represent the character on the `i`-th row and `j`-th column, where `i` and `j` are 1-indexed. The top left corner is **R<sub>1,1</sub>**. In the example palindromic crossword below, the B in **R<sub>3,2</sub>** is part of both the horizontal word starting at **R<sub>3,1</sub>** and the vertical word ending at **R<sub>4,2</sub>**, and both are palindromes.

![Palindromic Crossword](/images/round-e-palindromic-crossword-3.png)

You have been gifted a palindromic crossword puzzle with **N** rows and **M** columns. You finished the crossword and throw away the clues, preparing to hang it on your wall. However, you accidentally erase some of the letters! You want to recover as much of the crossword as possible, but you do not have the clues anymore. Using only the knowledge that the crossword is palindromic, restore the maximum possible number of missing characters in the given crossword.

Missing letters are represented as empty white cells in the below diagram. The crossword on the left is the crossword you are given and the crossword on the right is the result after you recover as many letters as possible. The remaining cells cannot be filled because we do not have sufficient information to recover them.

![Palindromic Crossword](/images/round-e-palindromic-crossword-4.png)

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.<br>
The first line of each test case contains two integers, **N** and **M**, representing the number of rows and columns in the crossword, respectively.<br>
The next **N** lines represent the **N** rows of the grid. The `i`-th row consists of M characters representing **R<sub>i,1</sub>**, **R<sub>i,2</sub>**, …, **R<sub>i,M</sub>**. Each character is one of the following:

- A capital letter of the alphabet (`A-Z`)
- A period (`.`) for a missing letter (empty white cell in the example crossword)
- A hash (`#`) for black cell

## Output

For each test case, output one line containing `Case #x: y` where `x` is the test case number (starting from 1) and `y` is the number of empty white cells that were filled. Then, output **N** more lines representing the final grid, with the missing characters (`.`) replaced by capital letters (`A-Z`) where possible.

## Limits

Time limit: 60 seconds.<br>
Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
There exists at least one way to fill in the given input grid such that it is a palindromic crossword.<br>
All characters in the grid are in the set `{A-Z, #, .}`<br>

### Test set 1

1 ≤ **N,M** ≤ 50.

### Test set 2

For at most 10 cases:<br>
1 ≤ **N,M** ≤ 1000

For the remaining cases:<br>
1 ≤ **N,M** ≤ 50.

## Sample

| Input  | Output     |
| ------ | ---------- |
| 2      |            |
| 2 2    | Case #1: 2 |
| A.     | AA         |
| .#     | A#         |
| 4 6    | Case #2: 8 |
| A...#. | A..A#.     |
| B##... | B##A.A     |
| B.###. | BB###A     |
| A...#. | ABBA#.     |

In Sample Case #2, we are able to fill in 8 of the blanks. We can fill in the missing letters as follows:

- row 1, column 4: We know this is `A` from character at row 1, column 1.
- row 2, column 4 `= A` from row 1, column 4.
- row 2, column 6 `= A` from row 2, column 4.
- row 3, column 6 `= A` from row 2, column 6.
- row 3, column 2 `= B` from row 3, column 1.
- row 4, column 2 `= B` from row 3, column 2.
- row 4, column 3 `= B` from row 4, column 2.
- row 4, column 4 `= A` from row 4, column 1.
