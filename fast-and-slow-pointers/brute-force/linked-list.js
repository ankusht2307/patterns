// Node definition
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Helper to create a linked list from array (without cycle)
const createLinkedList = (arr) => {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
};

// Helper to create a cycle in the list
// pos = index of node where tail connects (-1 for no cycle)
const createLinkedListWithCycle = (arr, pos) => {
  let head = createLinkedList(arr);
  if (pos === -1) return head;

  let cycleNode = null;
  let curr = head;
  let idx = 0,
    tail = null;

  while (curr) {
    if (idx === pos) cycleNode = curr;
    if (!curr.next) tail = curr;
    curr = curr.next;
    idx++;
  }
  if (tail) tail.next = cycleNode;
  return head;
};
