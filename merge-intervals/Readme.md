## Merge Intervals Pattern

Intuition:

Many scheduling, booking, or range problems deal with overlapping intervals.

The key trick:

Sort intervals by start time.

Compare each interval with the "last merged interval".

If overlap → merge them; otherwise → add as new.

This avoids checking every pair (brute force) and makes things clean and efficient.

## Common Pitfalls

- Forgetting to sort by start time before merging.

- Not handling nested intervals (like [1,10] and [2,3]).

- Overwriting intervals instead of creating a new merged one.

## Practice Problems

1. [Easy] Insert Interval
2. [Medium] Merge Intervals
3. [Medium] Meeting Rooms II (min number of conference rooms)
4. [Medium] Interval Intersection
5. [Medium] Non-overlapping Intervals (erase minimum intervals)
6. [Hard] Employee Free Time
7. [Hard] Minimum Number of Arrows to Burst Balloons
