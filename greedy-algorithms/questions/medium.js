/**
 *
 * Problem Statement: Kth Largest Element in an Array (LeetCode 215)
 * Given an array nums and integer k, return the kth largest element in the array.
 *
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 *
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 *
 */

// Brute
// Brute-force: sort
const kthLargestSort = (nums, k) => {
  // numeric sort descending
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

console.log(kthLargestSort([3, 2, 1, 5, 6, 4], 2)); // 5

// Complexity:
// Time: O(n log n) due to sorting
// Space: O(1) extra (sorting in-place) — actual JS sort may use O(log n) stack.

/************/

// Optimized — Min-heap of size k (good when k << n)
// Maintain a min-heap of size k. Push elements and pop when size > k. Top of heap is kth largest.
// Minimal MinHeap implementation
class MinHeap {
  constructor() {
    this.h = [];
  }
  size() {
    return this.h.length;
  }
  peek() {
    return this.h[0];
  }
  push(val) {
    this.h.push(val);
    this._siftUp(this.h.length - 1);
  }
  pop() {
    const n = this.h.length;
    if (!n) return undefined;
    if (n === 1) return this.h.pop();
    const top = this.h[0];
    this.h[0] = this.h.pop();
    this._siftDown(0);
    return top;
  }
  _siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.h[p] <= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
      i = p;
    }
  }
  _siftDown(i) {
    const n = this.h.length;
    while (true) {
      let l = 2 * i + 1,
        r = 2 * i + 2,
        smallest = i;
      if (l < n && this.h[l] < this.h[smallest]) smallest = l;
      if (r < n && this.h[r] < this.h[smallest]) smallest = r;
      if (smallest === i) break;
      [this.h[i], this.h[smallest]] = [this.h[smallest], this.h[i]];
      i = smallest;
    }
  }
}

const kthLargestHeap = (nums, k) => {
  const heap = new MinHeap();
  for (const x of nums) {
    heap.push(x);
    if (heap.size() > k) heap.pop();
  }
  return heap.peek();
};

console.log(kthLargestHeap([3, 2, 1, 5, 6, 4], 2)); // 5

// Complexity:
// Time: O(n log k) — each push/pop is O(log k)
// Space: O(k) extra

/************/

// QuickSelect — average O(n) time (in-place, randomized pivot)
// QuickSelect finds the element that would be at index n-k if the
// array were sorted ascending. Average O(n), worst-case O(n²) (use random pivot to reduce chance).

const kthLargestQuickSelect = (nums, k) => {
  const n = nums.length;
  const target = n - k; // index if sorted ascending

  function swap(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
  }

  function partition(a, left, right, pivotIndex) {
    const pivotVal = a[pivotIndex];
    swap(a, pivotIndex, right);
    let store = left;
    for (let i = left; i < right; i++) {
      if (a[i] < pivotVal) {
        swap(a, store, i);
        store++;
      }
    }
    swap(a, store, right);
    return store;
  }

  function randomInt(l, r) {
    return l + Math.floor(Math.random() * (r - l + 1));
  }

  let left = 0,
    right = n - 1;
  while (left <= right) {
    const pivotIndex = randomInt(left, right);
    const pivotNewIndex = partition(nums, left, right, pivotIndex);
    if (pivotNewIndex === target) return nums[pivotNewIndex];
    if (pivotNewIndex < target) left = pivotNewIndex + 1;
    else right = pivotNewIndex - 1;
  }
  return -1; // should not reach here if k is valid
};

const arr = [3, 2, 1, 5, 6, 4];
console.log(kthLargestQuickSelect(arr.slice(), 2)); // 5

// Complexity:
// Average Time: O(n)
// Worst-case Time: O(n^2) (rare when randomized pivot used)
// Space: O(1) extra (in-place)

/************/

const arr1 = [3, 2, 1, 5, 6, 4];
console.log("sort:", kthLargestSort(arr1.slice(), 2)); // 5
console.log("heap:", kthLargestHeap(arr1.slice(), 2)); // 5
console.log("quickselect:", kthLargestQuickSelect(arr1.slice(), 2)); // 5

// Which to use?

// Sort — simplest and perfectly fine for most cases; clear and short.
// Min-heap (size k) — great when k is much smaller than n (space O(k),
// good worst-case guarantee O(n log k)).

// QuickSelect — fastest on average (O(n)), good for large arrays when
// you want fastest average performance; modifies the array in-place
// and has rare worst-case behavior (use randomized pivot).

// Quick notes / pitfalls
// In JS, Array.prototype.sort() uses string comparison by default —
// always provide numeric comparator.
// QuickSelect modifies the input array; pass a copy if original must be preserved.
// Validate k (1 ≤ k ≤ nums.length) before calling.
