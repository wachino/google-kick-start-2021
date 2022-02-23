# Dependent Events

## Solution code

See [solution source code c++](/Round%20H/Dependent%20Events/solution.cpp)

See [solution source code js](/Round%20H/Dependent%20Events/solution.js)

## Analysis

You can see [solution analysis](/Round%20H/Dependent%20Events/analysis.md) extracted from Google webpage.

## Problem

There are **N** events, numbered 1 through **N**. The probability of occurrence of each event depends upon the occurrence of exactly one other event called the parent event, except event 1, which is an independent event. In other words, for each event from 2 to **N**, 3 values are given: **P<sub>i</sub>** denoting the parent event of event i, Ai denoting the probability of occurrence of event i if its parent event occurs, and Bi denoting the probability of occurrence of event i if its parent event does not occur. For event 1, its probability of occurrence **K** is given. There are Q queries that we want to answer. Each query consists of 2 distinct events, **u<sub>j</sub>** and **v<sub>j</sub>**, and you need to find the probability that both events **u<sub>j</sub>** and **v<sub>j</sub>** have occurred.

## Input

The first line of the input gives the number of test cases, **T**. **T** test cases follow.

The first line of each test case contains two integers **N** and **Q** denoting the number of events and number of queries, respectively. **N** lines follow. The i-th line describes event i. The first line contains a single integer **K** denoting the probability of occurrence of event 1 multiplied by 10<sup>6</sup>. Each of the next **N**−1 lines consists of three integers **P<sub>i</sub>**, Ai and Bi denoting the parent event of event `i`, the probability of occurrence of event `i` if its parent event occurs multiplied by 10<sup>6</sup>, and the probability of occurrence of event `i` if its parent event does not occur multiplied by 10<sup>6</sup>, respectively. Then, **Q** lines follow, describing the queries. Each of these lines contains two distinct integers **u<sub>j</sub>** and **v<sub>j</sub>**. For each query, find the probability that both events **u<sub>j</sub>** and **v<sub>j</sub>** occurred.

## Output

For each test case, output one line containing <code>Case #x: R<sub>1</sub> R<sub>2</sub> R<sub>3</sub> … R<sub>Q</sub></code>, where `x` is the test case number (starting from 1) and R<sub>j</sub> is the sought probability computed for j-th query modulo 10<sup>9</sup>+7, which is defined precisely as follows. Represent the answer of j-th query as an irreducible fraction p/q. The number R<sub>j</sub> then must satisfy the modular equation R<sub>j</sub>×q≡p(mod(10<sup>9</sup>+7)), and be between 0 and 10<sup>9</sup>+6, inclusive. It can be shown that under the constraints of this problem such a number R<sub>j</sub> always exists and is uniquely determined.

## Limits

Time limit: 60 seconds.<br>
Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.<br>
1 ≤ **P<sub>i</sub>** < i, for each i from 2 to N.<br>
1 ≤ **u<sub>j</sub>**,**v<sub>j</sub>** ≤ **N** and **u<sub>j</sub>**≠**v<sub>j</sub>**, for all j.<br>
0 ≤ **A<sub>i</sub>** ≤ 10<sup>6</sup>, for each i from 2 to **N**.<br>
0 ≤ **B<sub>i</sub>** ≤ 10<sup>6</sup>, for each i from 2 to **N**.<br>
0 ≤ **K**≤ 10<sup>6</sup>.

### Test set 1

2 ≤ **N** ≤ 1000.<br>
1 ≤ **Q** ≤ 1000.

### Test set 2

For at most 5 cases:<br>
2 ≤ **N** ≤ 2×10<sup>5</sup>.<br>
1 ≤ **Q** ≤ 2×10<sup>5</sup>.

For the remaining cases:<br>
2 ≤ **N** ≤ 1000.<br>
1 ≤ **Q** ≤ 1000.

## Sample

| Input           | Output                       |
| --------------- | ---------------------------- |
| 2               |                              |
| 5 2             | Case #1: 136000001 556640004 |
| 200000          |                              |
| 1 400000 300000 |                              |
| 2 500000 200000 |                              |
| 1 800000 100000 |                              |
| 4 200000 400000 |                              |
| 1 5             | Case #2: 710000005 849000006 |
| 3 5             |                              |
| 4 2             |                              |
| 300000          |                              |
| 1 100000 100000 |                              |
| 2 300000 400000 |                              |
| 3 500000 600000 |                              |
| 1 2             |                              |
| 2 4             |                              |

For Sample Case #1, for the first query, the probability that both events `1` and `5` occurred is given by (the probability that event `1` occurred) `×` (probability that event `5` occurs given event `1` occurred). Event `1` would occur with probability `0.2`. Given that event `1` occurred, the probability that event `4` occurs is `0.8`. Therefore, the probability of occurrence of event `5` given that event `1` occurred is `0.2×0.8+0.4×0.2=0.24` (probability of event `5` occurring given than event `4` occurred + probability of event `5` occurring given that event `4` did not occur). The probability that both events `1` and `5` occurred is `0.2×0.24=0.048`. The answer `0.048` can be converted into fraction of `6125`, and one can confirm that the `136000001` satisfies the conditions mentioned in the output section as `136000001×125≡6(mod(109+7))` and is uniquely determined. For the second query, the probability that both events `5` and `3` occurred is `0.10352`.

For Sample Case #2, for the first query, the probability that both events `1` and `2` occurred is given by (the probability that event `1` occurred) `×` (probability that event `2` occurs given event `1` occurred). As `1` is the parent event of event 2, the probability of event `2` occurring given event `1` occurred is **A<sub>2</sub>** which is `0.1`. Hence, the probability that both events `1` and 2 occurred is `0.3×0.1`. Hence, the output will be `3×10−2mod(109+7)=710000005`. For the second query, the probability of occurrence of both events `2` and `4` is `0.057`.
