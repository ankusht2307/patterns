class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }

  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p] <= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  _bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      let left = 2 * i + 1,
        right = 2 * i + 2,
        smallest = i;
      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

const kthLargest = (nums, k) => {
  const heap = new MinHeap();
  for (let num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }
  return heap.peek();
};

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5

// Big O
// Time: O(n log k)
// Space: O(k)
