# Analysis

## Test Set 1

We can check for every `i`,(1≤i≤**G**) whether there exists a `k` such that

![\sum_{j=0}^{k}(i+ j) = \sum_{j=0}^{k}i + \sum_{j=0}^{k}j = ((k+1) \times i) + \frac{k\times(k+1)}{2} = \mathbf{G}](https://render.githubusercontent.com/render/math?math=%5Csum_%7Bj%3D0%7D%5E%7Bk%7D%28i%2B%20j%29%20%3D%20%5Csum_%7Bj%3D0%7D%5E%7Bk%7Di%20%2B%20%5Csum_%7Bj%3D0%7D%5E%7Bk%7Dj%20%3D%20%28%28k%2B1%29%20%5Ctimes%20i%29%20%2B%20%5Cfrac%7Bk%5Ctimes%28k%2B1%29%7D%7B2%7D%20%3D%20%5Cmathbf%7BG%7D).

Finding such a `k` (if one exists) can be done by [binary searching](https://en.wikipedia.org/wiki/Binary_search_algorithm) the range <code>[0,**G**]</code>, and hence takes O(log**G**) time. For a candidate `k` in that range, we check if ((k+1)×i)+k×(k+1)2=G and alter the range based on the equality. Time complexity here is O(**G**log**G**).

## Alternative solution

For this Test Set, we can implement a brute force solution. We iterate over every `i`,(1≤i≤**G**) and try to sum up numbers `[i,i+1,i+2,…]` until the sum exceeds or equals **G**. If the sum equals **G**, then we increment our result by one. Here, each iteration takes O(**G**/`i`) time.

![\sum_{i=1}^{\mathbf{G}}(1/i) = O(log(\mathbf{G}))](https://render.githubusercontent.com/render/math?math=%5Csum_%7Bi%3D1%7D%5E%7B%5Cmathbf%7BG%7D%7D%281%2Fi%29%20%3D%20O%28log%28%5Cmathbf%7BG%7D%29%29).

Therefore, the overall time complexity of this solution is O(**G**log**G**).

## Test Set 2

Since the upper bound on **G** is 10<sup>12</sup>, O(**G**log**G**) solution times out. Let us define ![H = \lceil \sqrt{2 \times \mathbf{G}} \rceil](https://render.githubusercontent.com/render/math?math=H%20%3D%20%5Clceil%20%5Csqrt%7B2%20%5Ctimes%20%5Cmathbf%7BG%7D%7D%20%5Crceil). An observation can be made that `k≤H`. Therefore, for each k in the range `[0,H]`, we can binary search for i in the range [1,**G**] thereby making the total runtime ![O(\sqrt{\mathbf{G}} \times \log(\mathbf{G}))](https://render.githubusercontent.com/render/math?math=O%28%5Csqrt%7B%5Cmathbf%7BG%7D%7D%20%5Ctimes%20%5Clog%28%5Cmathbf%7BG%7D%29%29).
This solution might not pass within the time limit for slow languages. Therefore, we will look at a better solution next.

We can rewrite the equation we saw in Test Set 1 as ![i = \frac{2 \times \mathbf{G} - k^{2} - k}{2 \times (k+1)}](https://render.githubusercontent.com/render/math?math=i%20%3D%20%5Cfrac%7B2%20%5Ctimes%20%5Cmathbf%7BG%7D%20-%20k%5E%7B2%7D%20-%20k%7D%7B2%20%5Ctimes%20%28k%2B1%29%7D). Next, for each k in the range `[0,H]`, we can check in `O(1)` whether we can obtain a positive integer value for `i` that satisfies the above equation. The runtime here is ![O(\sqrt{\mathbf{G}})](https://render.githubusercontent.com/render/math?math=O%28%5Csqrt%7B%5Cmathbf%7BG%7D%7D%29).

## Alternative solution

We can dig deeper into the relationship between **G**, `K`, and `d`, the number of days it takes for the machine to produce exactly **G** gold starting at `K` on day one. They form the equation

![\frac{d(K + (K + d - 1))}{2} = \mathbf{G}](https://render.githubusercontent.com/render/math?math=%5Cfrac%7Bd%28K%20%2B%20%28K%20%2B%20d%20-%201%29%29%7D%7B2%7D%20%3D%20%5Cmathbf%7BG%7D)

which is equivalent to <code>d(d+(2K−1))=2**G**</code>. Since one of `d` and <code>(d+(2K−1))</code> is even and the other is odd, any pair of positive integers `x` and `y` such that exactly one of them is even and <code>x×y=2**G**</code> can be mapped to them with the smaller of the two being `d` and the larger one <code>(d+(2K−1))</code>, which is always greater than `d`. Since each mapping produces a different `d`, each pair corresponds to a unique solution for `d` and `K`. Conversely, every pair of `d` and `K` that satisfies the equation corresponds to a different `x`,`y` pair.

To count the number of such pairs, let `g` be the largest odd factor of 2**G**. Note that any (ordered) pair `x′`,`y′` such that `x′×y′=g` corresponds to a pair ![x = \frac{2\mathbf{G}}{g}x'](https://render.githubusercontent.com/render/math?math=x%20%3D%20%5Cfrac%7B2%5Cmathbf%7BG%7D%7D%7Bg%7Dx%27) and `y=y′`. Finally, assume the prime factorization of `g` is

![g = p_1^{\alpha_1}p_2^{\alpha_2} \cdots p_n^{\alpha_n}](https://render.githubusercontent.com/render/math?math=g%20%3D%20p_1%5E%7B%5Calpha_1%7Dp_2%5E%7B%5Calpha_2%7D%20%5Ccdots%20p_n%5E%7B%5Calpha_n%7D)

the number of such ordered pairs is `(α1+1)(α2+1)⋯(αn+1)`. We can thus prime factorize **G**, ignore the `2`, and multiply all other prime powers accordingly. Prime factorization can be trivially implemented in ![O(\sqrt{\mathbf{G}})](https://render.githubusercontent.com/render/math?math=O%28%5Csqrt%7B%5Cmathbf%7BG%7D%7D%29) complexity and there are ![o(\log(\mathbf{G}))](https://render.githubusercontent.com/render/math?math=O%28%5Clog%28%5Cmathbf%7BG%7D%29%29) prime factors. Therefore the total time complexity is ![O(\sqrt{\mathbf{G}})](https://render.githubusercontent.com/render/math?math=O%28%5Csqrt%7B%5Cmathbf%7BG%7D%7D%29).

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U3z9qhNwVIwGZw3CuwQzonOc4OT-KF5cb0OSxUCAEp56fIj9i0H5oHPH9i50bY/test_data.zip).
