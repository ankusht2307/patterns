/**
 * Problem Statement: Easy — Insert Interval
 *
 * Problem Statement:
 * You are given a list of non-overlapping intervals
 * sorted by start time. Insert a new interval into the list, merging if necessary.
 *
 */

const insertInterval = (intervals, newInterval) => {
  const result = [];
  let [newStart, newEnd] = newInterval;
  let i = 0;

  // Add all before new interval
  while (i < intervals.length && intervals[i][1] < newStart) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping
  while (i < intervals.length && intervals[i][0] <= newEnd) {
    newStart = Math.min(newStart, intervals[i][0]);
    newEnd = Math.max(newEnd, intervals[i][1]);
    i++;
  }
  result.push([newStart, newEnd]);

  // Add remaining
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
); // [[1,5],[6,9]]

// Complexities:
// Time: O(n)
// Space: O(n)
