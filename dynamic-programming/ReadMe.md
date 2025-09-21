## Dynamic Programming (DP)

DP is about solving problems by breaking them into overlapping subproblems and storing results (memoization/tabulation) to avoid recomputation.

## Intuition

- DP = recursion + memoization.

- Two main approaches:

  - Top-Down (Memoization): Think recursively, store answers.
  - Bottom-Up (Tabulation): Build from base cases iteratively.

- Identify overlapping subproblems and optimal substructure.

## Common Pitfalls

- Forgetting base cases (like amount=0, empty string).
- Using recursion without memoization → exponential blowup.
- Mixing up index vs length in DP arrays.
- Storing unnecessary states (optimize space if possible).

## Practice Problems

Easy

- [LC 70] Climbing Stairs
- [LC 198] House Robber
- [LC 746] Min Cost Climbing Stairs

Medium

- [LC 322] Coin Change
- [LC 518] Coin Change II
- [LC 64] Minimum Path Sum

Hard

- [LC 72] Edit Distance
- [LC 97] Interleaving String
- [LC 312] Burst Balloons
