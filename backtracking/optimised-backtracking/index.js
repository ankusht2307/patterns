/**
 *
 * Problem Statement: Generate all subsets of a set of distinct integers
 *
 */

const subsetsBacktrack = (nums) => {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]); // save a copy
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop(); // backtrack
    }
  }

  backtrack(0, []);
  return result;
};

console.log(subsetsBacktrack([1, 2, 3]));

// Complexities:
// Time Complexity: O(n·2^n)
// Space Complexity: O(n) recursion depth + O(n·2^n) for output
