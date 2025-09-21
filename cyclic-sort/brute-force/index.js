/**
 * Problem: Find Missing Number
 *
 * Check for each candidate x in [0..n] by scanning array to see if it exists.
 *
 */

// naive O(n^2) brute force
const findMissingBrute = (nums) => {
  const n = nums.length; // nums contains n numbers from 0..n with one missing
  for (let x = 0; x <= n; x++) {
    let found = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === x) {
        found = true;
        break;
      }
    }
    if (!found) return x;
  }
  return -1;
};

console.log(findMissingBrute([3, 0, 1])); // 2

// Complexities:
// Time: O(n²) (scan for each candidate)
// Space: O(1)
