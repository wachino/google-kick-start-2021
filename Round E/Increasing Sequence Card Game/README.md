# Increasing Sequence Card Game

## Solution code

See [solution source code](/Round%20E/Increasing%20Sequence%20Card%20Game/solution.cpp)

## Analysis

You can see [solution analysis](/Round%20E/Increasing%20Sequence%20Card%20Game/analysis.md) extracted from Google webpage.

## Problem

You're playing a card game as a single player.

There are **N** cards. The i-th card has integer i written on it.

You first shuffle **N** cards randomly and put them in a pile. Take the card at the top of the pile to your hand. Then repeat the following process until the pile becomes empty:

1. Check the card on the top of the pile.
   .1 If the number on the card is larger than the number on the last card you took, take the card.
1. Otherwise, discard the card.

The score of the game is the number of cards in your hand at the end. With the given number of cards **N**, what is the expected score of the game?

## Input

The first line of the input contains the number of test cases, **T**. **T** lines follow. Each line contains a single integer **N**, the number of cards in the pile.

## Output

For each test case, output one line containing `Case #x: y`, where `x` is the test case number (starting from 1) and `y` is the expected score at the end of the game.

`y` will be considered correct if it is within an absolute or relative error of 10<sup>-6</sup> of the correct answer. See the [FAQ](https://codingcompetitions.withgoogle.com/kickstart/faq#how-does-kick-start-handle-real-numbers) for an explanation of what that means, and what formats of real numbers we accept.

## Limits

Time limit: 20 seconds.<br>
Memory limit: 1 GB.<br>
1 ≤ **T** ≤ 100.

### Test set 1

1 ≤ **N** ≤ 10

### Test set 2

1 ≤ **N** ≤ 10<sup>6</sup>.

### Test set 3

1 ≤ **N** ≤ 10<sup>18</sup>.

## Sample

| Input | Output       |
| ----- | ------------ |
| 2     |              |
| 1     | Case #1: 1.0 |
| 2     | Case #2: 1.5 |
