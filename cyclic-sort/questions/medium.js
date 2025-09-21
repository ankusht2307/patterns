/**
 * Problem Statement: Find All Duplicates in an Array (LeetCode 442)
 *
 * Given an array of integers where 1 ≤ a[i] ≤ n and each integer
 * appears once or twice, return all numbers that appear twice.
 *
 */

const findDuplicates = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const correctIndex = nums[i] - 1;
    if (nums[i] !== nums[correctIndex]) {
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    } else {
      i++;
    }
  }

  const duplicates = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      duplicates.push(nums[j]);
    }
  }
  return duplicates;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
console.log(findDuplicates([1, 1, 2])); // [1]
console.log(findDuplicates([1])); // []

// Complexities:
// Time: O(n)
// Space: O(1) (ignoring output)
