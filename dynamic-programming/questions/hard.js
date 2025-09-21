/**
 *
 * Problem Statement: Edit Distance (LeetCode 72)
 *
 * Given two strings word1 and word2, return the minimum
 * operations required to convert word1 to word2 (insert, delete, replace).
 *
 * Example 1:
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 * Example 2:
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 *
 */

// Brute
const editDistanceBruteForce = (w1, w2, i = 0, j = 0) => {
  if (i === w1.length) return w2.length - j;
  if (j === w2.length) return w1.length - i;

  if (w1[i] === w2[j]) {
    return editDistanceBruteForce(w1, w2, i + 1, j + 1);
  }

  let insert = 1 + editDistanceBruteForce(w1, w2, i, j + 1);
  let del = 1 + editDistanceBruteForce(w1, w2, i + 1, j);
  let replace = 1 + editDistanceBruteForce(w1, w2, i + 1, j + 1);

  return Math.min(insert, del, replace);
};

console.log(editDistanceBruteForce("horse", "ros")); // 3
console.log(editDistanceBruteForce("intention", "execution")); // 5

// Big O:
// Time: O(3^n) exponential
// Space: O(n+m) recursion

// Optimized DP (Tabulation):
const editDistance = (w1, w2) => {
  const m = w1.length;
  const n = w2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (w1[i - 1] === w2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // delete
            dp[i][j - 1], // insert
            dp[i - 1][j - 1] // replace
          );
      }
    }
  }

  return dp[m][n];
};

console.log(editDistance("horse", "ros")); // 3
console.log(editDistance("intention", "execution")); // 5;

// Big O:
// Time: O(m·n)
// Space: O(m·n)
