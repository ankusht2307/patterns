/**
 *
 * Problem Statement: Fibonacci Number
 *
 */

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

console.log(fibMemo(6)); // 8

// Complexities:
// Time: O(n) (each state computed once)
// Space: O(n) recursion + O(n) memo
