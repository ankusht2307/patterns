const findMissingCyclic = (nums) => {
  let i = 0;
  const n = nums.length;

  // place each number at its correct index (value v → index v-1)
  while (i < n) {
    const correctIdx = nums[i] - 1;
    if (nums[i] >= 1 && nums[i] <= n && nums[i] !== nums[correctIdx]) {
      // swap into correct position
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }

  // collect missing numbers
  const missing = [];
  for (let idx = 0; idx < n; idx++) {
    if (nums[idx] !== idx + 1) missing.push(idx + 1);
  }
  return missing;
};

console.log(findMissingCyclic([4, 3, 2, 7, 8, 2, 3, 1])); // [5,6]

// Complexities:
// Time: O(n) — each index visited / swapped at most a constant number of times
// Space: O(1) extra (result array aside)
