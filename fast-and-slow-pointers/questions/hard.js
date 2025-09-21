/**
 * Problem: Start of Cycle in Linked List
 *
 * Problem Statement:
 * Given a linked list with a cycle, return the node where the cycle begins. If no cycle, return null.
 *
 * Approach:
 *
 * Optimized (Floyd’s Cycle Detection):
 * First detect cycle (using fast & slow).
 * Once they meet, reset one pointer to head.
 * Move both one step at a time — meeting point = cycle start.
 */

const detectCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};

// Complexities:
// Time: O(n)
// Space: O(1)
