/**
 *
 * Problem: Employee Free Time (LC 759)
 *
 * You are given a list schedule, where schedule[i] is a list
 * of a person’s working intervals.
 * Return the list of finite intervals where everyone is free.
 *
 * Example:
 *
 * Input: schedule = [
 * [[1,2],[5,6]],
 * [[1,3]],
 * [[4,10]]
 * ]
 *
 * Output: [[3,4]]
 *
 */

const employeeFreeTime = (schedule) => {
  // Flatten all intervals
  let intervals = [];
  for (let person of schedule) {
    for (let [start, end] of person) {
      intervals.push([start, end]);
    }
  }

  // Sort by start
  intervals.sort((a, b) => a[0] - b[0]);

  // Merge intervals
  let merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = merged[merged.length - 1];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      merged.push([start, end]);
    }
  }

  // Find gaps (free times)
  const freeTime = [];
  for (let i = 1; i < merged.length; i++) {
    freeTime.push([merged[i - 1][1], merged[i][0]]);
  }

  return freeTime;
};

console.log(
  employeeFreeTime([
    [
      [1, 2],
      [5, 6],
    ],
    [[1, 3]],
    [[4, 10]],
  ])
);
// [[3,4]]

// Complexity:
// Time: O(n log n) (sorting all intervals)
// Space: O(n)
// teaches flattening multiple lists, merging, then finding gaps.
