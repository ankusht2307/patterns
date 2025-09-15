/**
 *
 * Problem Statement: Generate all subsets of a set of distinct integers
 *
 */

const subsetsBruteForce = (nums) => {
  const n = nums.length;
  const result = [];
  for (let mask = 0; mask < 1 << n; mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if ((mask >> i) & 1) subset.push(nums[i]);
    }
    result.push(subset);
  }
  return result;
};

console.log(subsetsBruteForce([1, 2, 3]));

// Complexities:
// Time Complexity: O(n·2^n) (each subset needs building, across 2^n masks)
// Space Complexity: O(n·2^n) (storing all subsets)
