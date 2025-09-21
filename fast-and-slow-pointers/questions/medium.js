/**
 * Problem: Linked List Cycle Detection
 *
 * Problem Statement:
 * Given head of a linked list, return true if it has a cycle.
 *
 */

const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
};

// Complexities:
// Time: O(n)
// Space: O(1)
