/**
 *
 * Problem Statement: Binary Search (Linear scan brute force)
 *
 */

function searchLinear(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
}

console.log(searchLinear([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(searchLinear([-1, 0, 3, 5, 9, 12], 2)); // -1

// Complexity:
// Time O(n)
// Space O(1)
