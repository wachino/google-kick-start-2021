# Analysis

The integers `A`, `B` and `C` are in an [arithmetic progression](https://en.wikipedia.org/wiki/Arithmetic_progression) if `B−A=C−B` , that is, `A+C=2×B` . As `B` is an integer, `(A+C)/2` must also be an integer, which means `A+C` must be an even integer. We will use this condition to find the solution to the problem.

In a `3×3` grid of integers, there are `8` sequences which can be an arithmetic progression.

1. **G<sub>0,0</sub>**,**G<sub>0,1</sub>**,**G<sub>0,2</sub>**
1. **G<sub>0,0</sub>**,**G<sub>1,0</sub>**,**G<sub>2,1</sub>**
1. **G<sub>2,0</sub>**,**G<sub>2,1</sub>**,**G<sub>2,2</sub>**
1. **G<sub>0,2</sub>**,**G<sub>1,2</sub>**,**G<sub>2,2</sub>**
1. **G<sub>1,0</sub>**,G<sub>1,1</sub>,**G<sub>1,2</sub>**
1. **G<sub>0,1</sub>**,G<sub>1,1</sub>,**G<sub>2,1</sub>**
1. **G<sub>0,2</sub>**,G<sub>1,1</sub>,**G<sub>2,0</sub>**
1. **G<sub>0,0</sub>**,G<sub>1,1</sub>,**G<sub>2,2</sub>**

We want to find, at max, how many of the above sequences can be arithmetic sequences at the same time.

## Test Set 1

The first four sequences do not contain the missing value, and for each such sequence we can find if they form an arithmetic sequence in `O(1)` using the above condition that if `A`, `B` and `C` form an arithmetic progression then `A+C=2×B`. Now for the remaining four sequences, we iterate over all values from` −50` to `50` and assign it to the missing value G<sub>1,1</sub> and check how many of the remaining four form arithmetic progressions. The maximum number of sequences that can be created for a value as we iterate gives us the number of arithmetic progressions in the last four sequences.

_Complexity : <code>O(max(G<sub>i,j</sub>))</code> per test case_

## Test Set 2

The first four sequences do not contain the missing value and for each one of them we can check if they form an arithmetic progression using the condition described above. For the remaining sequences, we cannot iterate over all values from `−1000000000` to `1000000000` as it will result in a TLE. We will use the fact that if `A`, `B` and `C` form an arithmetic progression for given values of `A` and `C` then there will be exactly one `B` which will exist if and only if `A+C` is an even integer and `B` will be equal to `(A+C)/2`. For each of the last four sequences, consider G<sub>1,1</sub> as `B` and the values in the other two squares as `A` and `C`. For the sequences where `A+C` is even, evaluate `B=(A+C)/2` and find the maximum number of sequences which evaluate to the same `B`. If we consider such a `B` as G<sub>1,1</sub>, the number of arithmetic progressions in the last four sequences will be maximised.

_Complexity : `O(1)` per test case_

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U2VbPQR_YQRcRLi4i4YpooeXrsVkHL7NErWKvohWZZ7Tb4OATsqgS9FnA41KqE/test_data.zip).
