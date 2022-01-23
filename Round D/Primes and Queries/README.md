# Primes and Queries

## Solution code

See [solution source code](/Round%20D/Primes%20and%20Queries/solution.js)

## Analysis

You can see [solution analysis](/Round%20D/Primes%20and%20Queries/analysis.md) extracted from Google webpage.

## Problem

You are given a prime number **P**.

Let's define `V(x)` as the degree of **P** in the prime factorization of `x`. To be clearer, if` V(x)=y` then `x` is divisible by **P**<sup>y</sup>, but not divisible by **P**<sup>y+1</sup>.
Also we define `V(0)=0`.

For example, when `P=3`, and `x=45`, since `45=5⋅32`, therefore `V(45)=2`.

You are also given an array **A** with **N** elements. You need to process **Q** queries of 2 types on this array:

- type 1 query: 1 **pos** **val** - assign a value **val** to the element at pos, i.e. **A<sub>pos</sub>**:=**val**
- type 2 query: 2 **S L R** - print ![∑i=LRV(AiS−(AimodP)S)](<https://render.githubusercontent.com/render/math?math=%5Csum_%7Bi%3D%5Cmathbf%7BL%7D%7D%5E%7B%5Cmathbf%7BR%7D%7D%20V(%5Cmathbf%7BA_i%7D%5E%7B%5Cmathbf%7BS%7D%7D%20-%20(%5Cmathbf%7BA_i%7D%20%5Cbmod%20%5Cmathbf%7BP%7D)%5E%7B%5Cmathbf%7BS%7D%7D)>).

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.<br>
The first line of each test case contains `3` space separated positive integers **N**, **Q** and **P** - the number of elements in the array, the number of queries and a prime number.
The next line contains **N** positive integers **A<sub>1</sub>**,**A<sub>2</sub>**,…,**A<sub>N</sub>** representing elements of array **A**.
Each of the next **Q** lines describes a query, and contains either

- 3 space separated positive integers: 1 **pos val**
- or 4 space separated positive integers: 2 **S L R**

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is a list of the answers for each query of type **2**.

## Limits

Time limit: 90 seconds.
Memory limit: 1 GB.
1 ≤ **T** ≤ 100
2 ≤ **P** ≤ 10<sup>9</sup>
**P** is a prime number.
1 ≤ **pos** ≤ **N**
1 ≤ **L** ≤ **R** ≤ **N**

For at most 10 cases:<br>
1 ≤ **N** ≤ 5×10<sup>5</sup><br>
1 ≤ **Q** ≤ 10<sup>5</sup>

For the remaining test cases:<br>
1 ≤ **N** ≤ 10<sup>3</sup><br>
1 ≤ **Q** ≤ 10<sup>3</sup>

There will always be at least one query of type **2**.

### Test set 1

1 ≤ **S** ≤ 4<br>
1 ≤ **A<sub>i</sub>** ≤ 10<sup>3</sup><br>
1 ≤ **val** ≤ 10<sup>3</sup>

### Test set 2

1 ≤ **S** ≤ 10<sup>9</sup><br>
1 ≤ **A<sub>i</sub>** ≤ 10<sup>18</sup><br>
1 ≤ **val** ≤ 10<sup>18</sup>

## Sample

| Input          | Output           |
| -------------- | ---------------- |
| 2              |                  |
| 5 5 2          | Case #1: 4 9 2 3 |
| 16 94 62 67 91 |                  |
| 2 3 3 4        |                  |
| 1 1 69         |                  |
| 2 3 1 4        |                  |
| 2 1 1 1        |                  |
| 2 3 2 2        |                  |
| 5 5 5          | Case #2: 1 1 1   |
| 1 2 3 4 5      |                  |
| 2 1 1 5        |                  |
| 1 3 98         |                  |
| 2 3 2 4        |                  |
| 1 5 3          |                  |
| 2 2 1 5        |                  |

In Sample Case #1

The first query is a query of type 2, where **S** = 3, **L** = 3, **R** = 4. Let's calculate the result for this query:<br>
<code>i=3, V(62<sup>3</sup> − (62mod2)<sup>3</sup>)=3</code><br>
<code>i=4, V(67<sup>3</sup> − (67mod2)<sup>3</sup>)=1</code><br>
![∑i=34V(Ai3−(AimodP)3)=3+1=4](<https://render.githubusercontent.com/render/math?math=%5Csum_%7Bi%3D3%7D%5E%7B4%7D%20V(%5Cmathbf%7BA_i%7D%5E%7B3%7D%20-%20(%5Cmathbf%7BA_i%7D%20%5Cbmod%20%5Cmathbf%7BP%7D)%5E%7B3%7D)%3D3%2B1%3D4>)<br>

The second query is of type `1`, where we need to assign `69` to **A<sub>1</sub>**, so our array **A** now becomes: `69 94 62 67 91`.
