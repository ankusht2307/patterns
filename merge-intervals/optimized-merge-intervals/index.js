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
 *
 * Optimized Approach (Sorting + Linear Scan)
 *
 * Intuition:
 *
 * Sort the intervals by their start time.
 * Initialize the result list with the first interval.
 *
 * For each interval:
 * If it overlaps with the last interval in result, merge them.
 * Otherwise, add it as a new interval.
 * Sorting ensures we only need one pass to merge.
 *
 */

const mergeIntervalsOptimized = (intervals) => {
  if (!intervals.length) return [];

  // Step 1: sort by start
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]]; // start with first interval

  // Step 2: iterate through intervals
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = result[result.length - 1];

    if (start <= last[1]) {
      // Overlap → merge
      last[1] = Math.max(last[1], end);
    } else {
      // No overlap → push new interval
      result.push([start, end]);
    }
  }

  return result;
};

console.log(
  mergeIntervalsOptimized([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]

console.log(
  mergeIntervalsOptimized([
    [1, 4],
    [2, 3],
  ])
); // [[1,4]]

console.log(
  mergeIntervalsOptimized([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // [[1,2],[3,4],[5,6]]

// Complexity
// Time:
// Sorting → O(n log n)
// Single pass merge → O(n)
// Overall → O(n log n)
// Space:
// O(1) extra (if sorting in place).
