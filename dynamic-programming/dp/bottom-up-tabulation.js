const fibTab = (n) => {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(fibTab(6)); // 8

// Complexities:
// Time: O(n)
// Space: O(n) (can be reduced to O(1) using 2 variables)
