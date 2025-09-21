/**
 *
 * Problem Statement: First Missing Positive (LeetCode 41)
 *
 * Given an unsorted integer array, return the smallest missing positive integer.
 * Must run in O(n) time and use constant space.
 *
 *
 */

const firstMissingPositive = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;
    if (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[correctIndex]
    ) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1

// Complexities:
// Time: O(n)
// Space: O(1)
