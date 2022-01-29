# Analysis

## Test Set 1

For the first test set, we can generate all possible arrangements of the cards from 1 to **N**. For each arrangement of the cards, we can play the game to find the score for that particular arrangement. Then the expected score of the game will be the average score over all arrangements. The total number of possible arrangements for **N** cards is **N**!.

The time complexity is O(**N**⋅**N**!) which is under the required limit for **N**=10.

## Test Set 2

Our previous strategy would not work for this test set.
Let us consider arrangements where the number on top of the pile is `x`. Then among the remaining **N** − 1 cards, all the cards that are smaller than `x` will be discarded. We only need to take care of the ones that are greater than `x`. So, the expected score for arrangements with `x` on top of the pile will be one higher than the expected score of the rest of the cards greater than `x`. Also, it does not matter what the starting and ending number on the cards is, all that matters is the number of cards. So, the expected score of cards from `x + 1` to N is equal to expected score of cards from 1 to <code>**N** − x</code>. Assuming **E<sub>N</sub>** denotes the expected score of **N** cards, the expected score when `x` is on top is E<sub>**N**−x</sub>+1.

Now, `x` ranges from 1 to **N**, so the expected score for **N** cards is ![E_\mathbf{N} = \frac{\sum_{x=1}^{\mathbf{N}}(E_{\mathbf{N} - x} + 1)}{\mathbf{N}} =
\frac{\sum_{i=0}^{\mathbf{N}-1}E_{i}}{\mathbf{N}} + 1](https://render.githubusercontent.com/render/math?math=E_%5Cmathbf%7BN%7D%20%3D%20%5Cfrac%7B%5Csum_%7Bx%3D1%7D%5E%7B%5Cmathbf%7BN%7D%7D%28E_%7B%5Cmathbf%7BN%7D%20-%20x%7D%20%2B%201%29%7D%7B%5Cmathbf%7BN%7D%7D%20%3D%0A%5Cfrac%7B%5Csum_%7Bi%3D0%7D%5E%7B%5Cmathbf%7BN%7D-1%7DE_%7Bi%7D%7D%7B%5Cmathbf%7BN%7D%7D%20%2B%201). The summation in the term is a cumulative sum of expected scores of first **N** − 1 natural numbers. So, expected score for **N** cards can be computed in linear time if we maintain the cumulative sum of the expected score for **N** − 1 cards.

## Test Set 3

Let us denote ![\sum_{i=0}^{\mathbf{N}}E_i](https://render.githubusercontent.com/render/math?math=%5Csum_%7Bi%3D0%7D%5E%7B%5Cmathbf%7BN%7D%7DE_i) as S<sub>N</sub>, then from the result of the previous section, we have ![E_\mathbf{N} = \frac{S_{\mathbf{N}-1}}{\mathbf{N}} + 1](https://render.githubusercontent.com/render/math?math=E_%5Cmathbf%7BN%7D%20%3D%20%5Cfrac%7BS_%7B%5Cmathbf%7BN%7D-1%7D%7D%7B%5Cmathbf%7BN%7D%7D%20%2B%201). Now, for E<sub>N+1</sub> we have:

![E_{\mathbf{N}+1} = \frac{S_\mathbf{N}}{\mathbf{N}+1} + 1 = \frac{E_\mathbf{N} + S_{\mathbf{N}-1}}{\mathbf{N}+1} + 1](https://render.githubusercontent.com/render/math?math=E_%7B%5Cmathbf%7BN%7D%2B1%7D%20%3D%20%5Cfrac%7BS_%5Cmathbf%7BN%7D%7D%7B%5Cmathbf%7BN%7D%2B1%7D%20%2B%201%20%3D%20%5Cfrac%7BE_%5Cmathbf%7BN%7D%20%2B%20S_%7B%5Cmathbf%7BN%7D-1%7D%7D%7B%5Cmathbf%7BN%7D%2B1%7D%20%2B%201)

Now, substituting E<sub>N</sub> from the previous result, we get:

![E_{\mathbf{N}+1} = \frac{\frac{S_{\mathbf{N}-1}}{\mathbf{N}} + 1 + S_{\mathbf{N}-1}}{\mathbf{N}+1} + 1 =
\frac{\frac{(\mathbf{N}+1)S_{\mathbf{N}-1}}{\mathbf{N}} + 1}{\mathbf{N}+1} + 1](https://render.githubusercontent.com/render/math?math=E_%7B%5Cmathbf%7BN%7D%2B1%7D%20%3D%20%5Cfrac%7B%5Cfrac%7BS_%7B%5Cmathbf%7BN%7D-1%7D%7D%7B%5Cmathbf%7BN%7D%7D%20%2B%201%20%2B%20S_%7B%5Cmathbf%7BN%7D-1%7D%7D%7B%5Cmathbf%7BN%7D%2B1%7D%20%2B%201%20%3D%0A%5Cfrac%7B%5Cfrac%7B%28%5Cmathbf%7BN%7D%2B1%29S_%7B%5Cmathbf%7BN%7D-1%7D%7D%7B%5Cmathbf%7BN%7D%7D%20%2B%201%7D%7B%5Cmathbf%7BN%7D%2B1%7D%20%2B%201)
![\Rightarrow E_{\mathbf{N}+1} = \frac{S_{\mathbf{N}-1}}{\mathbf{N}} + \frac{1}{\mathbf{N}+1} + 1](https://render.githubusercontent.com/render/math?math=%5CRightarrow%20E_%7B%5Cmathbf%7BN%7D%2B1%7D%20%3D%20%5Cfrac%7BS_%7B%5Cmathbf%7BN%7D-1%7D%7D%7B%5Cmathbf%7BN%7D%7D%20%2B%20%5Cfrac%7B1%7D%7B%5Cmathbf%7BN%7D%2B1%7D%20%2B%201)
![\Rightarrow E_{\mathbf{N}+1} = E_\mathbf{N} + \frac{1}{\mathbf{N}+1}](https://render.githubusercontent.com/render/math?math=%5CRightarrow%20E_%7B%5Cmathbf%7BN%7D%2B1%7D%20%3D%20E_%5Cmathbf%7BN%7D%20%2B%20%5Cfrac%7B1%7D%7B%5Cmathbf%7BN%7D%2B1%7D)

This is the [harmonic series](<https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)>) since E<sub>1</sub>=1. We can estimate E<sub>N</sub> for N>10<sup>6</sup> with ![E_{10^{6}} + \int_{10^{6} +1}^{\mathbf{N}+1} \frac{1}{x} ,dx](https://render.githubusercontent.com/render/math?math=E_%7B10%5E%7B6%7D%7D%20%2B%20%5Cint_%7B10%5E%7B6%7D%20%2B1%7D%5E%7B%5Cmathbf%7BN%7D%2B1%7D%20%5Cfrac%7B1%7D%7Bx%7D%20%5C%2Cdx). Since ![\int \frac{1}{x} ,dx = \log(x) + C](https://render.githubusercontent.com/render/math?math=%5Cint%20%5Cfrac%7B1%7D%7Bx%7D%20%5C%2Cdx%20%3D%20%5Clog%28x%29%20%2B%20C), we get (for N > 10<sup>6</sup>):
![E_\mathbf{N} = E_{10^{6}} + \log(\mathbf{N}+1) - \log(10^{6} + 1)](https://render.githubusercontent.com/render/math?math=E_%5Cmathbf%7BN%7D%20%3D%20E_%7B10%5E%7B6%7D%7D%20%2B%20%5Clog%28%5Cmathbf%7BN%7D%2B1%29%20-%20%5Clog%2810%5E%7B6%7D%20%2B%201%29).

We can precompute the harmonic series till 10<sup>6</sup> in linear time and then estimate the score using the above formula for **N** > 10<sup>6</sup>. So, the overall time complexity is constant, specifically O(10<sup>6</sup>) for the precomputation.

Error Bounds
Consider the following 3 graphs:

![Increasing Sequence Card Game](/images/round-e-increasing-sequence-card-game-sample-1.jpeg)
![Increasing Sequence Card Game](/images/round-e-increasing-sequence-card-game-sample-2.jpeg)
![Increasing Sequence Card Game](/images/round-e-increasing-sequence-card-game-sample-3.jpeg)

The first image represents the actual number we need ![\sum_{x=s+1}^{e}\frac{1}{x}](https://render.githubusercontent.com/render/math?math=%5Csum_%7Bx%3Ds%2B1%7D%5E%7Be%7D%5Cfrac%7B1%7D%7Bx%7D), second image represents a larger area ![\int_{s}^{e}\frac{1}{x},dx](https://render.githubusercontent.com/render/math?math=%5Cint_%7Bs%7D%5E%7Be%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx) and third image represents a smaller area ![\int_{s+1}^{e+1}\frac{1}{x},dx](https://render.githubusercontent.com/render/math?math=%5Cint_%7Bs%2B1%7D%5E%7Be%2B1%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx). So, error (denoted as E<sub>r<sub>s,e</sub></sub>) is given by:

![Er_{s,e} \lt \int_{s}^{e}\frac{1}{x},dx -
\int_{s+1}^{e+1}\frac{1}{x},dx](https://render.githubusercontent.com/render/math?math=Er_%7Bs%2Ce%7D%20%5Clt%20%5Cint_%7Bs%7D%5E%7Be%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx%20-%0A%5Cint_%7Bs%2B1%7D%5E%7Be%2B1%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx)
![\Rightarrow Er_{s,e} \lt \int_{s}^{s+1}\frac{1}{x},dx -
\int_{e}^{e+1}\frac{1}{x},dx \lt \int_{s}^{s+1}\frac{1}{x},dx](https://render.githubusercontent.com/render/math?math=%5CRightarrow%20Er_%7Bs%2Ce%7D%20%5Clt%20%5Cint_%7Bs%7D%5E%7Bs%2B1%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx%20-%0A%5Cint_%7Be%7D%5E%7Be%2B1%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx%20%5Clt%20%5Cint_%7Bs%7D%5E%7Bs%2B1%7D%5Cfrac%7B1%7D%7Bx%7D%5C%2Cdx)
![\Rightarrow Er_{s,e} \lt \frac{1}{s}](https://render.githubusercontent.com/render/math?math=%5CRightarrow%20Er_%7Bs%2Ce%7D%20%5Clt%20%5Cfrac%7B1%7D%7Bs%7D)

Now, we are estimating only after 10<sup>6</sup>, so s = 10<sup>6</sup>, hence Er<sub>10<sup>6</sup>,e</sub><10<sup>−6</sup>.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U3PPTLBvK6XoHrUt9N5kNISQaQeOha6QFkMh8FzhfyGkOQKsiZTsndmD5tKLVI/test_data.zip).
