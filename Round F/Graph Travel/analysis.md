# Analysis

## Test Set 1

We use a brute force strategy by DFS:

1. Pick a room to start. Add it to the path and save the path as visited. If we have **K** points, increment our paths counter.
1. Pick a room outside the path that keeps our total points under **K**. Check if any coordidor connects the room to another room in the path. If yes, add the new connected room to the path and remove the corridor from the set. If no, try the next room outside the path. Evaluating each room choice requires checking every corridor and takes O(**M**) time.
1. If we are out of corridors or our total points ≥ **K**, we backtrack. Remove the latest room from the path, and try the next available corridor.

In terms of run time in the worst case, we try each possible ordering of rooms. There are **N**! orderings. Each ordering has **N** room "addition" steps and each step takes us **M** time to evaluate (see step 2 above). That gives us O(**N**! × **M**)

## Test Set 2

Brute force is not good enough. We approach this problem with dynamic programming. Our strategy will be the following:

1. Find the total magic points of every combination of rooms regardless of whether they can be visited.
1. For each combination of rooms, determine if a room can be visited as a new room.
1. Use dynamic programming to determine which combinations can actually be visited given any single room as a starting point.
1. Filter down to room combinations with point total **K** that can be visited.

There are <code>2<sup>N</sup></code> different ways to pick combinations of rooms. Let us first assume that it is possible to visit that combination of rooms and calculate the total magic points. Since there are <code>2<sup>N</sup></code> possible combinations, we can express each combination as a number whose binary representation tells us whether we visit that room. For example:

- `7 = 111` contains rooms `1`, `2`, and `3`
- `4 = 100` contains only room `3`

We can express the total number of magic points for each room combination as a list of length <code>2<sup>N</sup></code> and takes O(2<sup>N</sup> × **N**) time to compute. We can also do it in O(2<sup>N</sup>) using Sum Over Subset `Dp` technique.

Next, assume we have just visited a combination of rooms, we want to find out if we are able to visit a particular room and add it as a new unique room.

1. If at least one of the rooms in starting combination is adjacent to the new room. To check this, we can maintain a bitmask of rooms adjacent to each room (adjacency bitmask) and then we can check if the starting combination and adjacency bitmask have a common element (this can be done checking that the AND of starting combination and adjacency bitmask is non zero).
1. We have the correct number of points to break that room's shield (say our destination is room `i` and we have P points, this means **L<sub>i</sub>** ≤ P ≤ **R<sub>i</sub>**).

We can express this information as a 2<sup>N</sup> × **N** list of lists called `canVisit`. Let us say we find that we can visit room i from combination of rooms c. `canVisit[c][i] = true`. We also allow ourselves to start in any room so `canVisit[0][i] = true`. This list of lists takes O(2<sup>N</sup> × **N** + **M**) time to compute since checking each of above two steps takes O(1) time and the computing of adjacency bitmasks takes O(**M**) time because we need to iterate over all the corridors.
Now we use dynamic programming. We iterate through all the integers between 0 and 2<sup>N</sup>, each integer representing a possible combination of rooms. For a combination `x`, we iterate through every room already in `x`. We remove a room and check if it is possible to visit that room (i) from the remaining combination (`x′`) using the canVisit array (`canVisit[x′][i]`). The number of ways to visit combination `x` is equal to the sum of all the numbers of ways to visit all possible `x′`. Since we are iterating from smaller combinations up, we know we only need to iterate once. This will tell us which room combinations can be visited. This takes O(2<sup>N</sup> × **N** + **M**)

Finally, we pick out all the room combinations that have total of **K** points. We filter that down to the combinations that we can actually visit and sum all the unique ways to visit that combination. This just takes O(2<sup>N</sup>) time. Our final run time is O(2<sup>N</sup> × **N** + **M**)

## Test Data

We recommend that you practice debugging solutions without looking at the [test data](https://codejam.googleapis.com/dashboard/get_file/AQj_6U1fw75BWYFUwA9Pdf2wpr566iRMbblaMBdaJvfa_f2Bmvw1MTSx5w9gscMHxnQ/test_data.zip).
