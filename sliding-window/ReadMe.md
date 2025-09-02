# Sliding Window

## Concept

Sliding Window is an optimization for problems that require inspecting all contiguous subarrays / substrings. Instead of recomputing results from scratch for each window, keep a running summary and update it as the window moves.

- When to use / Detection clues

- The problem mentions subarray/ substring or a contiguous block.

- You're asked for maximum/minimum/longest/shortest with a constraint over contiguous elements.

- You can move left-to-right and update state by removing a left element and adding a right element.

### There are two common variants:

- Fixed-size window (window length k is given or implicit).

- Variable-size window (expand until condition satisfied, then shrink to restore property).
