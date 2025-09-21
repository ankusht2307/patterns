## Greedy Algorithms & Heap/Priority Queue

A Greedy algorithm builds a solution step by step, always choosing the locally optimal choice with the hope of reaching a global optimum.

Heaps/Priority Queues often support greedy decisions efficiently.

## Intuition

- Greedy works when local optimum → global optimum (e.g. activity selection, interval scheduling).
- Heaps help when we need quick access to largest/smallest elements dynamically.
- If greedy doesn’t work, usually DP is needed instead.

## Common Pitfalls

- Assuming greedy works everywhere → it doesn’t (need to prove greedy-choice property).
- Forgetting to use heap to manage dynamic greedy choices.
- Using sort when heap is more optimal (e.g. kth largest).
- Mixing min-heap and max-heap logic.

## Practice Problems

#### Easy

- [LC 455] Assign Cookies
- [LC 860] Lemonade Change
- [LC 1221] Split a String in Balanced Strings

#### Medium

- [LC 215] Kth Largest Element in an Array
- [LC 253] Meeting Rooms II
- [LC 621] Task Scheduler

#### Hard

- [LC 871] Minimum Number of Refueling Stops
- [LC 295] Find Median from Data Stream
- [LC 135] Candy
