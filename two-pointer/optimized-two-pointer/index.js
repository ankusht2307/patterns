const twoSumTwoPointers = (arr, target) => {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
};

const arr = [2, 7, 11, 15];
const target = 26;

console.log(twoSumTwoPointers(arr, target));

// Time: O(n), Space: O(1)
