# Consecutive Primes

## Solution code

See [solution source code](/Round%20B/Consecutive%20Primes/solution.cpp)

## Analysis

You can see [solution analysis](/Round%20B/Consecutive%20Primes/analysis.md) extracted from Google webpage.

## Problem

Ada has bought a secret present for her friend John. In order to open the present, Ada wants John to crack a secret code. She decides to give him a hint to make things simple for him. She tells him that the secret code is a number that can be formed by taking the product of two consecutive [prime numbers](https://en.wikipedia.org/wiki/Prime_number), such that it is the largest number that is smaller than or equal to **Z**. Given the value of **Z**, help John to determine the secret code.

Formally, let the order of prime numbers 2,3,5,7,11, ... be denoted by <code>p<sub>1</sub></code>,<code>p<sub>2</sub></code>,<code>p<sub>3</sub></code>,<code>p<sub>4</sub></code>,<code>p<sub>5</sub></code>, ... and so on. Consider Ri to be the product of two consecutive primes <code>p<sub>i</sub></code> and <code>p<sub>i+1</sub></code>. The secret code is the largest <code>R<sub>j</sub></code> such that <code>R<sub>j</sub></code>≤**Z**.

## Input

The first line of the input gives the number of test cases, **T**. **T** lines follow.<br>
Each line contains a single integer **Z**, representing the number provided by Ada as part of the hint.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the secret code - the largest number less than or equal to **Z** that is the product of two consecutive prime numbers.

## Limits

Time limit: 15 seconds.<br>
Memory limit: 1 GB.<br>
1≤**T**≤100.

### Test set 1

6≤**Z**≤2021

### Test set 2

6≤**Z**≤10<sup>9</sup>.

### Test set 3

6≤**Z**≤10<sup>18</sup>.

## Sample

| Input | Output        |
| ----- | ------------- |
| 2     |               |
| 2021  | Case #1: 2021 |
| 2020  | Case #2: 1763 |

For Sample Case #1, the secret code is `2021` because it is exactly the product of consecutive primes `43` and `47`.

For Sample Case #2, the secret code is `1763` because the product of `41` and `43` is `1763` which is smaller than `2020`, but the product of `43` and `47` exceeds the given value of `2020`.
