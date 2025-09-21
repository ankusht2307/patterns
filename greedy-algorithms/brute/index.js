/**
 *
 * Problem Statement: Find the Kth Largest Element in an array
 *
 */

const kthLargestBruteForce = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

console.log(kthLargestBruteForce([3, 2, 1, 5, 6, 4], 2)); // 5

// Big O
// Time: O(n log n)
// Space: O(1) or O(n) depending on sort implementation
