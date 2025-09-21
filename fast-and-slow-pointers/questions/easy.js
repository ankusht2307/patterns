/**
 * Problem Statement: Find Middle of Linked List
 *
 * Given the head of a singly linked list, return the middle node. If even length, return the second middle.
 *
 */

function middleNode(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Complexities:
// Time: O(n)
// Space: O(1)
