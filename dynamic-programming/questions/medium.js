/**
 *
 * Problem Statement: Coin Change (LeetCode 322)
 *
 * Given coins of different denominations and an amount,
 * return the fewest number of coins that make up that amount.
 *
 * Example1:
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example2:
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 * Example3:
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 */

// Brute Force
const coinChangeBruteForce = (coins, amount) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;

  let min = Infinity;
  for (let coin of coins) {
    min = Math.min(min, 1 + coinChangeBruteForce(coins, amount - coin));
  }
  return min;
}

console.log(coinChangeBruteForce([1, 2, 5], 11)); // 3

// Big O:
// Time: Exponential O(S^n), very slow
// Space: O(S) recursion depth

// Optimized DP (Tabulation):
const coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0

// Big O:
// Time: O(amount × n)
// Space: O(amount)
