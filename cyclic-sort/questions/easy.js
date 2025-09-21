/**
 * Problem Statement: Missing Number (LeetCode 268)
 *
 * Given an array containing n distinct numbers taken
 * from [0, n], return the one missing number.
 *
 */

const missingNumber = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) return j;
  }
  return nums.length;
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// Complexities:
// Time: O(n)
// Space: O(1)
