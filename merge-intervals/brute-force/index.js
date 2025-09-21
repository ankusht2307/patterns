/**
 * Problem: Merge Intervals
 *
 * You are given an array of intervals where intervals[i] = [start_i, end_i].
 * Merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Example 1
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 * Example 2
 * Input: intervals = [[1,4],[2,3]]
 * Output: [[1,4]]
 */

const mergeIntervalsBruteForce = (intervals) => {
  let merged = [...intervals]; // copy

  let didMerge = true;
  while (didMerge) {
    didMerge = false;
    const newMerged = [];
    const used = new Array(merged.length).fill(false);

    for (let i = 0; i < merged.length; i++) {
      if (used[i]) continue;

      let [start1, end1] = merged[i];
      let mergedThisRound = false;

      for (let j = i + 1; j < merged.length; j++) {
        if (used[j]) continue;

        let [start2, end2] = merged[j];

        // check overlap
        if (start1 <= end2 && start2 <= end1) {
          // merge them
          start1 = Math.min(start1, start2);
          end1 = Math.max(end1, end2);
          used[j] = true;
          didMerge = true;
          mergedThisRound = true;
        }
      }

      newMerged.push([start1, end1]);
      used[i] = true;
    }

    merged = newMerged;
  }

  return merged;
};

console.log(
  mergeIntervalsBruteForce([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]

console.log(
  mergeIntervalsBruteForce([
    [1, 4],
    [2, 3],
  ])
); // [[1,4]]

console.log(
  mergeIntervalsBruteForce([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // [[1,2],[3,4],[5,6]]

// Complexity
// Time:
// Each merge round compares pairs → O(n^2) worst case.
// And since merging reduces size gradually, still O(n^2).
// Space:
// O(n) for extra arrays.
