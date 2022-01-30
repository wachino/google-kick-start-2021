# Analysis

For every house, we have to find the closest house with a trash bin. This can either be the same house, or some other house to its left or right as at least one house has a trash bin in front of it.

Let `F(i)` denote distance that the i-th house owner has to walk to take their trashes out. The final answer is ![\displaystyle\sum_{i=1}^{\mathbf{N}} F(i)](<https://render.githubusercontent.com/render/math?math=%5Cdisplaystyle%5Csum_%7Bi%3D1%7D%5E%7B%5Cmathbf%7BN%7D%7D%20F(i)>)

## Test Set 1

For `i-th` house, we find `F(i)` by iterating over all the houses and picking the house `j` such that <code>**S**<sub>j</sub>=1</code> and the distance between the house `i` and `j` is least.

_Complexity : O(**N**<sup>2</sup>) per test case_

## Test Set 2

For `i-th` house, let `L(i)` denote the closest house to its left which has trash bin in front of it and `R(i)` denote the closest house to its right with a trash bin in front of it. We can find `L(i)` and `R(i)` for all the houses in one linear pass.

![L(i) =
  \begin{cases}
    -\infty       & \quad \text{if } i = 1
    i-1  & \quad \text{if } i > 1 \text{ and } \mathbf{S}_{i-1} = 1 
    L(i-1) & \quad \text{if } i > 1 \text{ and } \mathbf{S}_{i-1} = 0 
  \end{cases}](<https://render.githubusercontent.com/render/math?math=L(i)%20%3D%0A%20%20%5Cbegin%7Bcases%7D%0A%20%20%20%20-%5Cinfty%20%20%20%20%20%20%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20i%20%3D%201%5C%5C%0A%20%20%20%20i-1%20%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20i%20%3E%201%20%5C%2C%20%5Ctext%7B%20and%20%7D%20%5C%2C%20%5Cmathbf%7BS%7D_%7Bi-1%7D%20%3D%201%20%5C%5C%0A%20%20%20%20L(i-1)%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20i%20%3E%201%20%5C%2C%20%5Ctext%7B%20and%20%7D%20%5C%2C%20%5Cmathbf%7BS%7D_%7Bi-1%7D%20%3D%200%20%5C%5C%0A%20%20%5Cend%7Bcases%7D>)

![R(i) =
  \begin{cases}
    \infty       & \quad \text{if } i = \mathbf{N}
    i+1  & \quad \text{if } i < \mathbf{N} \text{ and } \mathbf{S}_{i+1} = 1 
    R(i+1) & \quad \text{if } i < \mathbf{N} \text{ and } \mathbf{S}_{i+1} = 0 
  \end{cases}](<https://render.githubusercontent.com/render/math?math=R(i)%20%3D%0A%20%20%5Cbegin%7Bcases%7D%0A%20%20%20%20%5Cinfty%20%20%20%20%20%20%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20i%20%3D%20%5Cmathbf%7BN%7D%5C%5C%0A%20%20%20%20i%2B1%20%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20i%20%3C%20%5Cmathbf%7BN%7D%20%5C%2C%20%5Ctext%7B%20and%20%7D%20%5C%2C%20%5Cmathbf%7BS%7D_%7Bi%2B1%7D%20%3D%201%20%5C%5C%0A%20%20%20%20R(i%2B1)%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20i%20%3C%20%5Cmathbf%7BN%7D%20%5C%2C%20%5Ctext%7B%20and%20%7D%20%5C%2C%20%5Cmathbf%7BS%7D_%7Bi%2B1%7D%20%3D%200%20%5C%5C%0A%20%20%5Cend%7Bcases%7D>)

![F(i) =
  \begin{cases}
    0       & \quad \text{if } \mathbf{S}_{i} = 1
    \min({i - L(i), R(i) - i})  & \quad \text{if } \mathbf{S}_{i} = 0
  \end{cases}](<https://render.githubusercontent.com/render/math?math=F(i)%20%3D%0A%20%20%5Cbegin%7Bcases%7D%0A%20%20%20%200%20%20%20%20%20%20%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20%5Cmathbf%7BS%7D_%7Bi%7D%20%3D%201%5C%5C%0A%20%20%20%20%5Cmin(%7Bi%20-%20L(i)%2C%20R(i)%20-%20i%7D)%20%20%26%20%5Cquad%20%5Ctext%7Bif%20%7D%20%5C%2C%20%5Cmathbf%7BS%7D_%7Bi%7D%20%3D%200%5C%5C%0A%20%20%5Cend%7Bcases%7D>)

You might have to deal with overflow issues depending on the data types used as the maximum value of answer does not fit 32-bit integer data types.

You can take `∞` as any value <code> >= 2 × **N**</code>.

_Complexity : O(**N**) per test case_

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U16brdy_7IvNVhPCqVO_qTQx-NW5fhV_jNBKhv8rsRN9K1iBHMkHWfC3yvAdoI/test_data.zip).
