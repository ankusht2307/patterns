## Binary Search

Binary Search is not just about searching a number in a sorted array.
It’s a pattern used whenever:

- The input space is monotonic (answer region can be divided into two halves).
- You can decide whether to go left or right based on a condition.

## Intuition

Binary search is essentially divide & conquer on a monotonic search space.
The trick is often to:

- Define the search space (not always the array itself — sometimes it’s "answer space").
- Define a predicate function that decides if the answer is to the left or right.

## Practice Problems

- Easy: LC 704 (Binary Search), LC 35 (Search Insert Position)
- Medium: LC 33 (Search in Rotated Sorted Array), LC 162 (Find Peak Element), LC 34 (First and Last Position of Element)
- Hard: LC 4 (Median of Two Sorted Arrays), LC 410 (Split Array Largest Sum), LC 875 (Koko Eating Bananas)
