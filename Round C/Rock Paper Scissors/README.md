# Rock Paper Scissors

## Solution code

See [solution source code](/Round%20C/Rock%20Paper%20Scissors/solution.js)

## Analysis

You can see [solution analysis](/Round%20C/Rock%20Paper%20Scissors/analysis.md) extracted from Google webpage.

## Problem

You and your friend like to play [Rock Paper Scissors](https://en.wikipedia.org/wiki/Rock_paper_scissors). Each day you play exactly 60 rounds and at the end of each day, you tally up the score from these 60 rounds.

During each round, without any knowledge of the other person's choice, you each make your choice. Then, you both reveal the choice you made and determine your score. Rock wins over Scissors, Scissors wins over Paper, and Paper wins over Rock. Let R represent Rock, P represent Paper, and S represent Scissors. Every day you both agree on values **W** and **E**. If your choice wins, you get **W** points. If you and your friend both pick the same choice, you get **E** points. If your choice loses, you get nothing.

By accident, you see your friend's strategy written in an open notebook on a desk one day. Your friend keeps track of how many times you have chosen `R`, `P`, and `S` so far during one day. Let <code>A<sub>i</sub></code> be your choice of `R`, `P`, or `S` on round `i`, while Bi is your friend's choice on the same round. Let <code>r<sub>i</sub></code> be the number of times <code>A<sub>j</sub></code>= `R` for `1≤j≤(i−1)`. Similarly, let <code>p<sub>i</sub></code> and <code>s<sub>i</sub></code> be the total number of times you have chosen `P` and `S`, respectively, prior to round `i`.

On round `1` of each day, `i=1` and <code>r<sub>1</sub>=s<sub>1</sub>=p<sub>1</sub>=0</code>, and your friend plays randomly due to the lack of information (i.e. your friend chooses each option with probability `1/3`). On every subsequent round, your friend decides <code>B<sub>i</sub></code> by choosing `R` with probability <code>Pr[R]=s<sub>i</sub>/(i−1)</code>, P with probability <code>Pr[P]=r<sub>i</sub>/(i−1)</code>, and `S` with probability <code>Pr[S]=p<sub>i</sub>/(i−1)</code>. This strategy is adaptive and tough to beat!

You are going on vacation for the next **T** days. You must leave your assistant with instructions on what choice to pick each round each day. Let integer **X** be the average reward you are aiming for in this game after **T** days. Given **W** and **E** (different values for different days), provide your instructions as a string of 60 characters, ordered from round 1 to round 60. Each character represents your choice for the corresponding round. Your goal is to choose your set of instructions so that the average [expected value](https://en.wikipedia.org/wiki/Expected_value) of the reward across all the days of your gameplay is at least **X**. Note that you can choose different instructions for different values of **W** and **E**.

## Input

The first line of the input gives the number of days, **T**. The second line contains an integer **X**, your targeted average reward after these **T** days. Then the description of **T** days follows. Each day is described as two integers **W** and **E**. **W** is how much you get if your choice wins for each round that day. **E** is how much you get for each round when your choice is the same as your friend's choice.

All the tests (except the sample test below) are generated as follows. We choose `50` different values `G` between `5` and `95` (with uniform distribution). Then for each of these values, there will be `4` days, with **W** equal to `10×G` and E equal to **W**,**W**/2,**W**/10, and `0`. Do not assume anything about the order of these days.

## Output

For each day, output one line containing <code>Case #x: A<sub>1</sub>A<sub>2</sub>…A<sub>60</sub></code>, where `x` is the day number (starting from 1) and <code>A<sub>i</sub></code> is your choice of `R`, `P`, or `S` on the i-th round of the game. There should be no spaces between the choices.

The list of choices should result in an expected value that is greater than or equal to **X** on average after **T** days. There may be multiple solutions for a test case. If so, you may output any one of them. It is guaranteed that for given **X** a solution exists.

## Limits

Time limit: 40 seconds.<br>
Memory limit: 1 GB.<br>
**T**=200 (for all tests except the sample where **T**=2).<br>
50≤W≤950.<br>
0≤**E**≤**W** and **E** is one of **W**,**W**/2,**W**/10, or `0`.<br>
Each day you play exactly 60 rounds.

### Test set 1

**X**=14600.

### Test set 2

**X**=15500.

### Test set 3

**X**=16400.

## Sample

| Input | Output                                                                |
| ----- | --------------------------------------------------------------------- |
| 2     |                                                                       |
| 30    |                                                                       |
| 60 0  | Case #1: RSRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR |
| 60 60 | Case #2: PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP |

In this sample test our targeted (average) reward across all **T**=2 days is 30.

For the first day, since **W**=60, you can reach the total target by winning at least once. One possible strategy is to just get to that single win.

- On round `1`, you choose <code>A<sub>1</sub> = R</code>. You have an equal chance of a win, a tie, or a loss, giving you an expected value of `20`.
- On round `2`, <code>r<sub>2</sub> = 1</code> and <code>p<sub>2</sub> = s<sub>2</sub> = 0</code>. Your friend's probability of choosing `P` is <code>Pr[P] = r<sub>2</sub>/1 = 1</code>, which guarantees your friend's choice <code>B<sub>2</sub> = P</code>.
- If you choose <code>A<sub>2</sub> = S</code>, you are guaranteed a win, giving you a score of `60` for round `2`.
- Regardless of what you choose for all following rounds in the game, your expected value after just two rounds is `20+60 = 80`, which is enough to reach our target.

Moreover, as we already will have the average across all 2 days at least <code>80/2 = 40 ≥ **X** = 30</code>, for the second day we can use any strategy.

Note that this is not a unique solution. As long as the average expected score is `≥ 30`, other outputs would also be accepted.
