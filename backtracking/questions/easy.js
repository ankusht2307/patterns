/**
 *
 * Problem Statement: Subsets (LeetCode 78)
 *
 */

function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));

// Complexities:
// Time: O(n·2^n)
// Space: O(n) recursion + O(n·2^n) result
