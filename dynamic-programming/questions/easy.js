/**
 *
 * Problem Statement: Climbing Stairs (LeetCode 70)
 *
 * You are climbing a staircase. Each time you can
 * climb 1 or 2 steps. How many distinct ways can
 * you reach the top?
 *
 */

// Brute
const climbStairsBruteForce = (n) => {
  if (n <= 2) return n;
  return climbStairsBruteForce(n - 1) + climbStairsBruteForce(n - 2);
};

console.log(climbStairsBruteForce(6));

// Complexities:
// Time: O(2^n)
// Space: O(n) recursion

// Optimized DP (Memoization)
const climbStairsMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return n;
  memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
  return memo[n];
};

console.log(climbStairsMemo(6));

// Complexities:
// Time: O(n)
// Space: O(n)
