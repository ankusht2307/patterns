/**
 * Problem Statement: Two Sum (Sorted Array)
 *
 */

const twoSumSorted = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
};

console.log(twoSumSorted([2, 7, 11, 15], 9)); // [0,1]

// Complexities:
// Time: O(n)
// Space: O(1)
