/**
 * Problem Statement: Smallest subarray with sum ≥ S (minimum window length) (variable-size)
 *
 * Given an array of positive integers and a target S, find the minimal length of a contiguous
 * subarray of which the sum is at least S. Return 0 if no such subarray exists.
 *
 * Idea: Expand right to increase sum; once sum >= S, try shrinking from left to find smaller
 *  window while maintaining sum >= S. Track min length.
 *
 */

const minSubArrayLen = (S, arr) => {
  let left = 0,
    sum = 0,
    minLen = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= S) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 ([4,3])

// Complexity: O(n) time, O(1) extra space.
