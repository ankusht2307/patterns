const slidingWindowFixed = (arr, k) => {
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
};

const arr = [2, 1, 5, 1, 3, 2];
const k = 2;

console.log(slidingWindowFixed(arr, k));
