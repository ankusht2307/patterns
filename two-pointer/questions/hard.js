/**
 * Problem Statement: 3Sum Problem
 * Given an integer array nums, return all unique
 * triplets [nums[i], nums[j], nums[k]] such that they sum to 0.
 *
 */

const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicates

    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === arr[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2], [-1,0,1]]

// Complexities:
// Time: O(n²)
// Space: O(1) (ignoring output storage)
