# Final Exam

## Solution code

See [solution source code](/Round%20D/Final%20Exam/solution.cpp)

## Analysis

You can see [solution analysis](/Round%20D/Final%20Exam/analysis.md) extracted from Google webpage.

## Problem

It's time for the final exam in algorithms and data structures!

Edsger prepared **N** sets of problems. Each set consists of problems in an increasing difficulty sequence; the i-th set can be described by two integers **A<sub>i</sub>** and **B<sub>i</sub>** (**A<sub>i</sub>**≤**B<sub>i</sub>**), which denotes that this set contains problems with difficulties **A<sub>i</sub>**,**A<sub>i+1</sub>**,…,**B<sub>i</sub>**. Among all problems from all sets, it is guaranteed that no two problems have the same difficulty.

This semester Edsger has to test **M** students. He wants to test each student with exactly one problem from one of his sets. No two students can get the exact same problem, so when Edsger tests a student with some problem, he cannot use this problem anymore. Through countless lectures, exercises, and projects, Edsger has gauged student number `j` to have skill level **S<sub>j</sub>**, and wants to give that student a problem with difficulty **S<sub>j</sub>**. Unfortunately, this is not always possible, as Edsger may have not prepared a problem of this difficulty, or he may have already asked this problem to some other student earlier. Therefore, Edsger will choose for the `j`-th student a problem of difficulty <code>P<sub>j</sub></code>, in a way that |<code>P<sub>j</sub></code>−**S<sub>j</sub>**| is minimal and a question of difficulty <code>P<sub>j</sub></code> was not already given to any of the students before the `j`-th student. In case of ties, Edsger will always choose the easier problem. Note that the problem chosen for the `j`-th student may affect problems chosen for all the students tested later, so you have to process students in the same order as they appear in the input.

As keeping track of all the problems can be fairly complicated, can you help Edsger and determine which problems he should give to all of his students?

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

Each test case begins with a line which contains two integers **N** and **M**: the number of problem sets, and the number of students, respectively. **N** lines follow, describing the problem sets. Each of these **N** lines consists of two integers **A<sub>i</sub>** and **B<sub>i</sub>** denoting the easiest and the hardest problem in the `i`-th problem set. Finally, the test case ends with a single line with **M** integers **S<sub>1</sub>**,**S<sub>2</sub>**,…,**S<sub>M</sub>** denoting students' skill levels in the order they will be tested.

## Output

For each test case, output one line containing <code>Case #x: P<sub>1</sub> P<sub>2</sub> ... P<sub>M</sub></code>, where `x` is the test case number (starting from 1) and P<sub>j</sub> is a difficulty of a problem that will be given to the `j`-th student.

## Limits

Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
Among all problem sets, no two problems have the same difficulty.
The number of problems in total is greater than or equal to the number of students.

### Test set 1

Time limit: 20 seconds.<br>
1≤ **N** ≤ 1000.<br>
1≤ **M** ≤ 1000.<br>
1≤ **A<sub>i</sub>** ≤ **B<sub>i</sub>** ≤ 1000 for all `i`.<br>
1≤ **S<sub>j</sub>** ≤ 1000 for all `j`.

### Test set 2

Time limit: 40 seconds.<br>
1 ≤ **N** ≤ 105.<br>
1 ≤ **M** ≤ 105.<br>
1 ≤ **A<sub>i</sub>** ≤ **B<sub>i</sub>** ≤ 10<sup>18</sup> for all `i`.<br>
1 ≤ **S<sub>j</sub>** ≤ 10<sup>18</sup> for all `j`.

## Sample

| Input      | Output              |
| ---------- | ------------------- |
| 2          |                     |
| 5 4        | Case #1: 12 24 11 2 |
| 1 2        |                     |
| 6 7        |                     |
| 9 12       |                     |
| 24 24      |                     |
| 41 50      |                     |
| 14 24 24 4 |                     |
| 1 1        | Case #2: 42         |
| 42 42      |                     |
| 24         |                     |

In Sample Case #1, we have **N**=5 problem sets and **M**=4 students.

- For the first student, we are looking for a problem with the difficulty closest to their skill level **S<sub>1</sub>**=14. The problem with the minimum difference is problem with difficulty 12, which we can find in the third problem set, so **P<sub>1</sub>**=12.
- For the second student, we are looking for a problem with the difficulty closest to their skill level **S<sub>2</sub>**=24. Fortunately, we can find a problem of this exact difficulty in the fourth problem set, so **P<sub>2</sub>**=24.
- For the third student, we are once again looking for a problem with the difficulty closest to the skill level **S<sub>3</sub>**=24. As we already used the problem with difficulty 24, we cannot use this problem. The problem closest in difficulty is 11, as 12 was already used as well. Therefore **P<sub></sub>**=11.
- Finally, for the fourth student, we are looking for the problem closest to his skill level **S<sub>4</sub>**=4. We have two problems with the same difference: 2 and 6. We choose the easier problem, so **P<sub>4</sub>**=2.

In Sample Case #2, we have **N**=1 problem set and **M**=1 student. In the only problem set, there is only one problem, so we have to use this problem to examine the first and only student, so P<sub></sub>=42.
