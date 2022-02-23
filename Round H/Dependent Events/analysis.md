# Analysis

For this problem, we are given a [graphical model](https://en.wikipedia.org/wiki/Graphical_model) in the form of a directed, rooted tree, where each vertex is an event. For any vertex v on this tree, let `v = 0` and `v = 1` denote the non-occurrence and occurrence of event v, respectively. Let l<sub>j</sub> be the [lowest common ancestor (LCA)](https://en.wikipedia.org/wiki/Lowest_common_ancestor) of **u<sub>j</sub>** and **v<sub>j</sub>**. By the [total probability rule](https://en.wikipedia.org/wiki/Law_of_total_probability), ![P[\mathbf{u_j}=1, \mathbf{v_j}=1]=\sum_{i=0}^1 P[\mathbf{u_j}=1, \mathbf{v_j}=1, l_j=i]](https://render.githubusercontent.com/render/math?math=P%5B%5Cmathbf%7Bu_j%7D%3D1%2C%20%5Cmathbf%7Bv_j%7D%3D1%5D%3D%5Csum_%7Bi%3D0%7D%5E1%20P%5B%5Cmathbf%7Bu_j%7D%3D1%2C%20%5Cmathbf%7Bv_j%7D%3D1%2C%20l_j%3Di%5D). We know **u<sub>j</sub>** and **v<sub>j</sub>** are [conditionally independent](https://en.wikipedia.org/wiki/Conditional_independence) given **l<sub>j</sub>**, because the paths **l<sub>j</sub>**→**u<sub>j</sub>** and **l<sub>j</sub>**→**v<sub>j</sub>** are edge-disjoint due to the definition of LCA. This allows us to simplify the earlier sum into ![\sum_{i=0}^1 P[\mathbf{u_j}=1 | l_j=i]P[\mathbf{v_j}=1 | l_j = i]P[l_j=i]](https://render.githubusercontent.com/render/math?math=%5Csum_%7Bi%3D0%7D%5E1%20P%5B%5Cmathbf%7Bu_j%7D%3D1%20%7C%20l_j%3Di%5DP%5B%5Cmathbf%7Bv_j%7D%3D1%20%7C%20l_j%20%3D%20i%5DP%5Bl_j%3Di%5D). This formula forms the basis of our solution, and the approaches for the two test sets differ only in how to compute the required probabilities efficiently.

To deal with the output format of this problem, we store all results as fractions and take the numerator and denominator modulo 10<sup>9</sup> + 7 after each operation to avoid overflow. If our final result is p/q, we output pq<sup>−1</sup>(mod10<sup>9</sup> + 7). Due to the nature of the problem, `q` will always be a power of ten, so the inverse is guaranteed to exist, and can be efficiently computed via [extended Euclidean algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm). Alternatively, due to [Fermat's little theorem](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem), we can equivalently raise `q` to the (10<sup>9</sup> + 5)-th power to find its inverse; this can be done efficiently with [exponentiation by squaring](https://en.wikipedia.org/wiki/Exponentiation_by_squaring).

## Test Set 1

For this test set it suffices to naively compute l<sub>j</sub>. We can then compute ![P[\mathbf{u_j}=1|l_j]](https://render.githubusercontent.com/render/math?math=P%5B%5Cmathbf%7Bu_j%7D%3D1%7Cl_j%5D) and ![P[\mathbf{v_j}=1|l_j]](https://render.githubusercontent.com/render/math?math=P%5B%5Cmathbf%7Bv_j%7D%3D1%7Cl_j%5D) by walking back down the tree from l<sub>j</sub>. To do this, we can use the total probability rule similar to before; if p(x) denotes the parent of x, then ![P[x=1 | l_j=i] = \sum_{k=0}^1P[x=1,p(x)=k | l_j=i] = \sum_{k=0}^1 P[x=1 | p(x)=k]P[p(x)=k | l_j = i]](https://render.githubusercontent.com/render/math?math=P%5Bx%3D1%20%7C%20l_j%3Di%5D%20%3D%20%5Csum_%7Bk%3D0%7D%5E1P%5Bx%3D1%2Cp%28x%29%3Dk%20%7C%20l_j%3Di%5D%20%3D%20%5Csum_%7Bk%3D0%7D%5E1%20P%5Bx%3D1%20%7C%20p%28x%29%3Dk%5DP%5Bp%28x%29%3Dk%20%7C%20l_j%20%3D%20i%5D); note that the first term in this product comes from the input, and the second term comes from the previous step of our walk. We can use the same formula to compute ![P[l_j=i]](https://render.githubusercontent.com/render/math?math=P%5Bl_j%3Di%5D), since ![P[l_j=i]=\sum_{k=0}^1P[l_j=i|r=k]P[r=k]](https://render.githubusercontent.com/render/math?math=P%5Bl_j%3Di%5D%3D%5Csum_%7Bk%3D0%7D%5E1P%5Bl_j%3Di%7Cr%3Dk%5DP%5Br%3Dk%5D), where `r` is the root of the tree.

Each vertex is visited at most O(1) times per query using this technique, so our overall time complexity is O(**NQ**) per test case, which is sufficient.

## Test Set 2

There are both more queries and a larger tree in this test set, so the naive solution is too slow. This test set requires computing l<sub>j</sub>, the `LCA` of **u<sub>j</sub>** and **v<sub>j</sub>**, in O(log **N**) time anyways, so we can think of ways to augment an `LCA` algorithm to also keep track of the necessary probabilities for us. For example, the binary lifting `LCA` algorithm pre-computes p<sup>i</sup>(v) for all vertices `v`, where p<sup>i</sup>(⋅) gives the 2i-th parent of a given vertex. We can extend the binary lifting algorithm to not only store the id of this parent, but to also store ![P[v=1|p^i(v)]](https://render.githubusercontent.com/render/math?math=P%5Bv%3D1%7Cp%5Ei%28v%29%5D). These probabilities can then be multiplied such that only O(logN) hops are needed to get from **u<sub>j</sub>** or **v<sub>j</sub>** up to l<sub>j</sub>. The unconditional probability ![P[l_j]](https://render.githubusercontent.com/render/math?math=P%5Bl_j%5D) can simply be pre-computed for the entire tree via `DFS` in O(**N**) time. This allows us to answer each query in O(log **N**) time, so our overall time complexity is O(**N** log**N** + **Q** log **N**) per test case.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U10s_ZRC5AsTE2rCvqlq_b3X4eGnDdOITh09TuNjwBfBuYqNRNvyyK3Lov4/test_data.zip).