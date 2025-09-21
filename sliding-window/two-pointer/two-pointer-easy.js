/**
 * Problem statement: Maximum sum subarray of size k (fixed-size)
 *
 * Given an array of positive numbers and an integer k,
 * find the maximum sum of any contiguous subarray of size k.
 *
 * Example: arr = [2,1,5,1,3,2], k = 3 → answer 9 (subarray [5,1,3])
 *
 */

const maxSubArrayOfSizeK = (arr, k) => {
  if (k > arr.length) return null;

  let windowSum = 0;
  // build first window
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let maxSum = windowSum;

  // slide window: add arr[i], remove arr[i-k]
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(maxSubArrayOfSizeK([2, 1, 5, 1, 3, 2], 3)); // 9

// Why it works: Each time we move the window right by one, only two elements change (entering and leaving). We update sum in O(1).
// Complexity: O(n) time, O(1) space.
