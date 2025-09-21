const twoSumBruteForce = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return [];
};

const arr = [2, 7, 11, 15];
const target = 26;

console.log(twoSumBruteForce(arr, target));

// Time: O(n^2), Space: O(1)
