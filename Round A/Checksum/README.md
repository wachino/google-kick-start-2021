# Checksum

## Solution code

See [solution source code](/Round%20A/Checksum/solution.js)

## Analysis

You can see [solution analysis](/Round%20A/Checksum/analysis.md) extracted from Google webpage.

## Problem

Grace and Edsger are constructing a **N×N** boolean matrix **A**. The element in `i`-th row and `j`-th column is represented by **A<sub>i,j</sub>**. They decide to note down the checksum (defined as bitwise XOR of given list of elements) along each row and column. Checksum of `i`-th row is represented as Ri. Checksum of `j`-th column is represented as Cj.

For example, if **N**=2, ![A=\begin{bmatrix}1 & 0 \1 & 1\end{bmatrix}](https://render.githubusercontent.com/render/math?math=%5Cmathbf%7BA%7D%20%3D%20%5Cbegin%7Bbmatrix%7D1%20%26%200%20%5C%5C1%20%26%201%5Cend%7Bbmatrix%7D), then ![R=\begin{bmatrix}1 & 0\end{bmatrix}](https://render.githubusercontent.com/render/math?math=%5Cmathbf%7BR%7D%20%3D%20%5Cbegin%7Bbmatrix%7D1%20%26%200%5Cend%7Bbmatrix%7D) and ![C=\begin{bmatrix}0 & 1\end{bmatrix}](https://render.githubusercontent.com/render/math?math=%5Cmathbf%7BC%7D%20%3D%20%5Cbegin%7Bbmatrix%7D0%20%26%201%5Cend%7Bbmatrix%7D).

Once they finished the matrix, Edsger stores the matrix in his computer. However, due to a virus, some of the elements in matrix **A** are replaced with `−1` in Edsger's computer. Luckily, Edsger still remembers the checksum values. He would like to restore the matrix, and reaches out to Grace for help. After some investigation, it will take **B<sub>i,j</sub>** hours for Grace to recover the original value of **A<sub>i,j</sub>** from the disk. Given the final matrix **A**, cost matrix **B**, and checksums along each row (**R**) and column (**C**), can you help Grace decide on the minimum total number of hours needed in order to restore the original matrix **A**?

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

The first line of each test case contains a single integer **N**.

The next **N** lines each contain **N** integers representing the matrix **A**. `j`-th element on the `i`-th line represents **A<sub>i,j</sub>**.

The next **N** lines each contain **N** integers representing the matrix B. `j`-th element on the `i`-th line represents **B<sub>i,j</sub>**.

The next line contains **N** integers representing the checksum of the rows. `i`-th element represents **R<sub>i</sub>**.

The next line contains **N** integers representing the checksum of the columns. `j`-th element represents **C<sub>j</sub>**.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from `1`) and `y` is the minimum number of hours to restore matrix **A**.

## Limits

Memory limit: 1 GB.<br>
1≤**T**≤100.<br>
−1≤**A<sub>i,j</sub>**≤1, for all `i`,`j`.<br>
1≤**B<sub>i,j</sub>**≤1000, for `i`,`j` where **A<sub>i,j</sub>**=`−1`, otherwise **B<sub>i,j</sub>**=`0`.<br>
0≤**R<sub>i</sub>**≤1, for all `i`.<br>
0≤**C<sub>j</sub>**≤1, for all `j`.<br>
It is guaranteed that there exist at least one way to replace `−1` in **A** with `0` or `1` such that **R** and **C** as satisfied.

### Test set 1

Time limit: 20 seconds.<br>
1≤**N**≤4.

### Test set 2

Time limit: 35 seconds.<br>
1≤**N**≤40.

### Test set 3

Time limit: 35 seconds.<br>
1≤**N**≤500.

## Sample

| Input    | Output     |
| -------- | ---------- |
| 3        |            |
| 3        | Case #1: 0 |
| 1 -1 0   |            |
| 0 1 0    |            |
| 1 1 1    |            |
| 0 1 0    |            |
| 0 0 0    |            |
| 0 0 0    |            |
| 1 1 1    |            |
| 0 0 1    |            |
| 2        | Case #2: 1 |
| -1 -1    |            |
| -1 -1    |            |
| 1 10     |            |
| 100 1000 |            |
| 1 0      |            |
| 0 1      |            |
| 3        | Case #3: 2 |
| -1 -1 -1 |            |
| -1 -1 -1 |            |
| 0 0 0    |            |
| 1 1 3    |            |
| 5 1 4    |            |
| 0 0 0    |            |
| 0 0 0    |            |
| 0 0 0    |            |

In Sample Case #1, **A<sub>1,2</sub>** can be restored using the checksum of either `1`-st row or `2`-nd column. Hence, Grace can restore the matrix without spending any time to recover the data.

In Sample Case #2, Grace spends one hour to recover **A<sub>1,1</sub>**. After that, she can use checksums of `1`-st row and `1`-st column to restore **A<sub>1,2</sub>** and **A<sub>2,1</sub>** respectively. And then she can use checksum of `2`-nd row to restore **A<sub>2,2</sub>**. Hence, Grace can restore the matrix by spending one hour.

In Sample Case #3, Grace can spend one hour to recover **A<sub>1,1</sub>** and another hour to recover **A<sub>2,2</sub>**. After that, she can use checksum to restore the rest of the matrix. Hence, Grace can restore the matrix by spending two hours in total.
