## Brute Force Approach

For many sliding window problems, the naive solution is to compute the result for each possible window independently.

## Example (max sum subarray of size k):

```javascript
function maxSubArrayBrute(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
```

## Brute Force Approach

For many sliding window problems, the naive solution is to compute the result for each possible window independently.

## Example (max sum subarray of size k):

```javascript
function maxSubArrayBrute(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
```

### Time Complexity:

O(n \* k) — for each of ~n windows we spend O(k) to compute sum. Space Complexity: O(1) extra space.

This becomes inefficient when n is large (like 10^5) and k is significant. Sliding window optimizes it.
