## Backtracking Pattern (Permutations, Combinations, Subsets)

Backtracking is a systematic trial-and-error approach where we build a solution step by step, and whenever we realize that the current path cannot lead to a valid answer, we backtrack by undoing the last step and trying alternatives.

## Intuition

- Backtracking = DFS exploration of a decision tree.

- At each step:

  1. Choose (make a decision).
  2. Explore (recursive call).
  3. Un-choose (backtrack).

- Great for search spaces that grow exponentially (permutations, combinations, constraints).

## Common Pitfalls in Backtracking

- Forgetting to undo (backtrack) a choice → leads to incorrect results.
- Using global mutable state without cleanup.
- Not considering duplicates in subsets/permutations → need sorting + skip duplicates.
- Inefficient pruning → exploring unnecessary branches when constraints could cut them early.

## Practice Problems

#### Easy

- [LC 78] Subsets
- [LC 401] Binary Watch
- [LC 784] Letter Case Permutation

#### Medium

- [LC 46] Permutations
- [LC 39] Combination Sum
- [LC 22] Generate Parentheses

#### Hard

- [LC 51] N-Queens
- [LC 52] N-Queens II
- [LC 37] Sudoku Solver
