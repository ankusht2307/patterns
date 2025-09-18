/**
 *
 * Problem Statement: Permutations (LeetCode 46)
 *
 */

const permute = (nums) => {
  const result = [];
  const used = new Array(nums.length).fill(false);

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
};

console.log(permute([1, 2, 3]));

// Complexities:
// Time: O(n·n!) (n! permutations, each taking O(n) to build)
// Space: O(n) recursion + O(n·n!) result
