# Analysis

Let us define <code>F(a,s)=V(a<sup>s</sup> − (a mod **P**)<sup>s</sup>)</code>.<br>
The main idea is to use segment trees as there are range queries and point updates. If we can calculate the <code>F(**A<sub>i</sub>**,**S**)</code> efficiently, then we can query the range sum and also update the values using segment tree operations. Calculating the `F(a,s)` part needs different approaches for different test sets.

## Test set 1

As **S** can only be at most 4, we can maintain individual segment trees for each **S**. So now **S** is fixed for a single segment tree. The values of **A<sub>i</sub>** s are also small, so we can calculate **A<sub>i</sub>**<sup>**S**</sup> without overflowing. Let us say we have `2` segment tree operations, `sum(start, end)` which gives us the sum from index start to end and `update(idx, val)` which updates the index `idx` with `val`. We are maintaining `maxS` different segment trees. So initially in the `j`'th tree, we have the values <code>F(**A<sub>i</sub>**,j)s</code>. When there is a query like **2 S L R**, we call <code>sum(**L**,**R**)</code> on the **S**th tree. And when there is an update like **1 pos val**, we have to update each tree, so we call <code>update(**pos**, F(**val**, j))</code> on the `j`'th tree.

Building the trees initially takes O(maxS⋅**N**).<br>
Type 1 query (update) takes O(**S**⋅log**N**).<br>
Type 2 query takes O(log**N**).<br>
The time complexity of this solution is O(maxS⋅**N** + **Q**⋅**S**⋅log**N**).

## Test set 2

As **S** and **A<sub>i</sub>** s are huge now, we can't maintain a segment tree for each **S** and also can't calculate **A<sub>i</sub>**<sup>**S**</sup> without overflowing. So a different approach is needed.

The idea originates from [lifting-the-exponent-lemma](https://en.wikipedia.org/wiki/Lifting-the-exponent_lemma). The lemma states that, if `P` is a prime, and `P` divides `a-b` but divides neither `a` nor `b`, then <code>V(a<sup>n</sup> − b<sup>n</sup>)=V(a − b) + V(n)</code>. But it has a special case.<br>
When `P=2` and `n` is even, then <code>V(a<sup>n</sup> − b<sup>n</sup>)=V(a − b) + V(a + b) + V(n) − 1</code>.<br>
Here `V(x)` carries the same meaning as defined in the problem statement.<br>
Another observation is **A<sub>i</sub>** − (**A<sub>i</sub>** mod **P**) is always divisible by **P**, which makes it possible for us to use the lemma.

We will handle everything in 2 cases.

_Case 1 - **A<sub>i</sub>** or **val** is divisible by **P**_:<br>
We will have a segment tree for this. Initially we will update the indices having **A<sub>i</sub>** s divisible by **P** with V(**A<sub>i</sub>**)s. When there is an update like 1 pos **val**, we will update index pos with V(**val**).<br>
When we have a query like **2 S L R**, we will call sum(**L**,**R**) and multiply that with **S**, because F(**A<sub>i</sub>**,S)=S⋅V(**A<sub>i</sub>**) in this case.

_Case 2 - **A<sub>i</sub>** or **val** is not divisible by **P**_:
This has 2 subcases because of the special case, so we will have 2 separate segment trees. Initially we will update the indices having **A<sub>i</sub>** s not divisible by **P** with V(**A<sub>i</sub>** − (**A<sub>i</sub>** mod **P**)) in one tree and with V(**A<sub>i</sub>** + (**A<sub>i</sub>** mod **P**)) − 1 in the other. When there is an update like 1 **pos** **val**, we will update index **pos** with V(**val** − (**val** mod **P**)) in the first tree and with V(**val** + (**val** mod **P**)) − 1 on the other.<br>
We will also maintain another segment tree that will help us query the number of values that are not divisible by **P** in a given range.
When we have a query like **2 S L R**, if **P**=2 and **S** is even, then we call sum(**L**,**R**) on both segment trees and add them. Otherwise we call it only on the first one. Also if there are `X` values not divisible by **P** in the range **L** to **R**, we will add `X`⋅V(**S**) to the answer.

The final answer is the summation of the queries from the 2 above cases.

V(**S**) can be calculated in <code>O(log**S**)</code>. And when **A<sub>i</sub>** is divisible by **P**, the value of V(**A<sub>i</sub>**<sup>**S**</sup>−(**A<sub>i</sub>** mod **P**)<sup>**S**</sup>) is just V(**A<sub>i</sub>**<sup>**S**</sup>), which is **S** ⋅ V(**A<sub>i</sub>**), that can be calculated with brute force with complexity of <code>O(log**A<sub>i</sub>**)</code>.

The time complexity of this solution is <code>O(**N** log(max(**A<sub>i</sub>**)) + **Q** ⋅ (log **N** + log(max(**S**, **val**))))</code>.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1T5wunyEeYYnDC4eiP9HfLyicDtSS0qasjyH3hiqK1ZYOPEf28ndTPgjxGZgI/test_data.zip).
