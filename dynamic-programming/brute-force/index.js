/**
 *
 * Problem Statement: Fibonacci Number
 *
 */

const fibBruteForce = (n) => {
  if (n <= 1) return n;
  return fibBruteForce(n - 1) + fibBruteForce(n - 2);
};

console.log(fibBruteForce(6)); // 8

// Complexities:
// Time: O(2^n) → each call branches into 2 calls
// Space: O(n) recursion depth