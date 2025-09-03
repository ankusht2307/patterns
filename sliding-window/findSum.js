/**
 * Problem Statement: Maximum sum subarray of size k (fixed-size)
 * Given an array of positive numbers and an integer k, find the maximum sum of any contiguous subarray of size k.
 *
 * Example: arr = [2,1,5,1,3,2], k = 3 → answer 9 (subarray [5,1,3])
 *
 * @param {*} arr
 * @param {*} size
 * @returns
 */

const findSum = (arr, k) => {
  if (k > arr.length) return -1;

  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
};

const arr = [2, 1, 5, 1, 3, 2];
const k = 2;

console.log(findSum(arr, k));
