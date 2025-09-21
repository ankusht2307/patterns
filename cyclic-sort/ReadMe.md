## Cyclic Sort

Use when the array contains numbers in a known range (typically 1..n or 0..n-1) and you can reorder in place to put value v at index v-1 (or v at index v).
Goal: O(n) time, O(1) extra space.

## Intuition

Cyclic sort is like seating students in the correct chair.
If each number can be mapped to an index, we swap until it’s in place.
After placement, any mismatch reveals missing numbers, duplicates, or first gaps.

## Common Pitfalls

- Forgetting range check (only swap when 1 ≤ num ≤ n for positive problems).

- Infinite loops when you don’t move the pointer after invalid numbers.

- Counting duplicates: skip swapping if nums[i] == nums[correctIndex].

- For [0…n] problems, handle the “extra slot” case correctly.

## Practice Problems

1. Easy: LeetCode 268 — Missing Number
2. Medium: LeetCode 448 — Find All Numbers Disappeared in an Array
3. Medium: LeetCode 442 — Find All Duplicates in an Array
4. Hard: LeetCode 41 — First Missing Positive
5. Hard: LeetCode 645 — Set Mismatch
