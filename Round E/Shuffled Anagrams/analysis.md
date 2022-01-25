# Analysis

## Test Set 1

For this test set, since the length of **S** ≤ 8, we can try every permutation of characters and check whether there exists a permutation such that for all i, `S[i] ≠ A[i]`. To find every permutation, we can first convert the string to a character array. Then, we swap the first element with every other element and recursively find permutations of the rest of the string.

This can be performed in O(N!), where `N` is the length of **S**.

## Test Set 2

For this test set, the above solution would exceed the time limits.

The key observation here is that if a character exists more than ![\lfloor \frac{N}{2} \rfloor](https://render.githubusercontent.com/render/math?math=%5Clfloor%20%5Cfrac%7BN%7D%7B2%7D%20%5Crfloor) times, then it's impossible to find such a permutation, because at least one position will have a letter that stays the same. Otherwise, we can sort the letters and keep track of the initial position of each letter.

Let the new sorted letters be `P`. We can split the sorted letters into two halves, from index `0` to `N/2`, `P[0:N/2]`, and from `N/2` to the end, `P[N/2:]`. If `N` is odd, split `P` such that the second half has an extra letter, where the first half is 0 to ![\lfloor \frac{N}{2} \rfloor](https://render.githubusercontent.com/render/math?math=%5Clfloor%20%5Cfrac%7BN%7D%7B2%7D%20%5Crfloor) and the second half is from ![\lceil \frac{N}{2} \rceil](https://render.githubusercontent.com/render/math?math=%5Clceil%20%5Cfrac%7BN%7D%7B2%7D%20%5Crceil) to the end. Then, we put each character from the second half of the sorted letters `P[i+(N/2)]` into the original position of the corresponding letter in the first half `P[i]`. Similarly, we put each character from the first half of the sorted letters `P[i]` into the original position of the corresponding letter in the second half `P[i+(N/2)]`. Note that if `N` is odd, the second half of the sorted letters `P[i+(N/2)]` will occupy the first ![\lfloor \frac{N}{2} \rfloor +1](https://render.githubusercontent.com/render/math?math=%5Clfloor%20%5Cfrac%7BN%7D%7B2%7D%20%5Crfloor%20%2B1) spaces, while the original first half will occupy the last ![\lfloor \frac{N}{2} \rfloor](https://render.githubusercontent.com/render/math?math=%5Clfloor%20%5Cfrac%7BN%7D%7B2%7D%20%5Crfloor) spaces, as shown in the example below. The letter originally at `P[N−1]` will be in the middle of the array after the swap, replacing ![P[i + \lfloor \frac{N}{2} \rfloor]](https://render.githubusercontent.com/render/math?math=P%5Bi%20%2B%20%5Clfloor%20%5Cfrac%7BN%7D%7B2%7D%20%5Crfloor%5D)

![Shuffled Anagrams](/images/round-e-shuffled-anagrams-1.png)

This works because we know that no more than half the characters are equal, and hence the character at `P[i]` cannot be equal to the letter at `P[i+(N/2)]`.

This can be performed in O(`N` log `N`), due to sorting. However, due to the limited size of the alphabet, we can actually sort even faster using a non-comparative sorting algorithm such as [counting sort](https://en.wikipedia.org/wiki/Counting_sort).

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1-x6WUN3J4UUpc_aIKT6mVEIMZbqk1_7XSAcwvnF2_btFV5BZLei0aJxzYLB4/test_data.zip).
