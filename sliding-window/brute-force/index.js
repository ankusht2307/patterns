const maxSubArrayBrute = (arr, k) => {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

const arr = [2, 1, 5, 1, 3, 2];
const k = 2;

console.log(maxSubArrayBrute(arr, k));
