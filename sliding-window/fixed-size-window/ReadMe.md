## Fixed-size window

Compute result for the first window of size k.

For each next index i from k to n-1: add arr[i], remove arr[i-k], update result.

```javascript
function slidingWindowFixed(arr, k) {
  if (k > arr.length) return null;
  let windowSum = 0;
  // initialize first window
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let best = windowSum;

  // slide
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    best = Math.max(best, windowSum);
  }

  return best;
}
```

### Complexity:

O(n) time, O(1) extra space.
