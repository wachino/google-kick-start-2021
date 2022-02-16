# Analysis

Let us first define the two operations that we can perform.

- **Clockwise**: Changing a letter to the one following it. For example, changing from `c` to `d`.
- **Counter-clockwise**: Changing a letter to the one preceding it. For example, changing from `a` to `z`.

Let us denote the [ASCII](https://en.wikipedia.org/wiki/ASCII) value of a character c<sub>x</sub> by <code>ASCII(c<sub>x</sub>)</code>. If we move the padlock from a character ca to another character cb such that <code>ASCII(c<sub>a</sub>) < ASCII(c<sub>b</sub>)</code>, the number of operations required in clockwise direction <code>= ASCII(c<sub>b</sub>) − ASCII(c<sub>a</sub>)</code> and the number of operations required in counter-clockwise direction <code> = 26 − (ASCII(c<sub>b</sub>) − ASCII(c<sub>a</sub>))</code>.

For example, if we move the padlock from c to e:

- Number of operations required in clockwise direction <code>= ASCII(e) − ASCII(c) = 2</code>.
- Number of operations required in counter-clockwise direction <code>= 26 − (ASCII(e) − ASCII(c)) = 24</code>.

Similarly, if we move the padlock from a character c<sub>a</sub> to another character c<sub>b</sub> such that <code>ASCII(c<sub>a</sub>) > ASCII(c<sub>b</sub>)</code>, the number of operations required in clockwise direction <code>= 26 − (ASCII(c<sub>a</sub>) − ASCII(c<sub>b</sub>))</code> and the number of operations required in counter-clockwise direction <code>= ASCII(c<sub>a</sub>) − ASCII(c<sub>b</sub>))</code>.

For example, if we move the padlock from `g` to `b`:

- Number of operations required in clockwise direction <code>= 26 − (ASCII(g) − ASCII(b)) = 21</code>.
- Number of operations required in counter-clockwise direction <code>= ASCII(g) − ASCII(b) = 5</code>.

Thus minimum number of operations required to change a character in the padlock from c<sub>a</sub> to c<sub>b</sub> <code>= min(abs(ASCII(c<sub>a</sub>) − ASCII(c<sub>b</sub>))</code>, <code>26 − abs(ASCII(c<sub>a</sub>) − ASCII(c<sub>b</sub>)))</code>.

Let us call the above expression <code>f(c<sub>a</sub>,c<sub>b</sub>)</code>.

## Approach 1

### Test Set 1

When length of **F** = 1 we need to change every character in **S** to that in **F**. Therefore, the answer is the sum of f(c<sub>s</sub>,c<sub>f</sub>) for every character c<sub>s</sub> in **S** and c<sub>f</sub> in **F**.

## Test Set 2

For this case, **F** can have multiple characters.

For each character in **S** we need to find a character in **F** such that f(c<sub>s</sub>,c<sub>f</sub>) is minimized. Therefore, for every character c<sub>s</sub> in **S**, we iterate over all possible characters c<sub>f</sub> in **F** and find minimum of f(c<sub>s</sub>,c<sub>f</sub>) and add the minimum value to the final answer.

## Approach 2

For each character in **S**, move the padlock in the clockwise direction and count the number of operations until we reach a character that belongs to **F**. Similarly, for the same character in **S**, move the padlock in the counter-clockwise direction and count the number of operations until we reach a character that belongs to **F**. Compare the number of operations in both directions and add minimum of the two to the final answer.

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U2aG-Co-QTL1yHYqEnvk1Q8ZAWe9waRF0-cutPJwVQvqjPG6T__RiXkm6xh23E/test_data.zip).
