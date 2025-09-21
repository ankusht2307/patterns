/**
 * Problem: Insert Interval (LC 57)
 *
 * You are given a set of non-overlapping intervals sorted by start time.
 * Insert a new interval into the intervals, merging if necessary.
 *
 * Example:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 */

const insertInterval = (intervals, newInterval) => {
  const result = [];
  let i = 0;

  // Step 1: add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Step 2: merge all overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Step 3: add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
// [[1,5],[6,9]]

console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
// [[1,2],[3,10],[12,16]]

// Complexities
// Time: O(n)
// Space: O(n)
// teaches handling insertion + merge in O(n)