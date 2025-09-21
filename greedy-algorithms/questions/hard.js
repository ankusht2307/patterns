/**
 *
 * Problem Statement: Minimum Number of Refueling Stops (LeetCode 871)
 *
 * Start at position 0 with fuel = startFuel. Gas stations [pos, fuel].
 * Return minimum refuels needed to reach target.
 *
 * Example 1:
 * Input: target = 1, startFuel = 1, stations = []
 * Output: 0
 * Explanation: We can reach the target without refueling.
 *
 * Example 2:
 * Input: target = 100, startFuel = 1, stations = [[10,100]]
 * Output: -1
 * Explanation: We can not reach the target (or even the first gas station).
 *
 * Example 3:
 * Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
 * Output: 2
 * Explanation: We start with 10 liters of fuel.
 * We drive to position 10, expending 10 liters of fuel.
 * We refuel from 0 liters to 60 liters of gas.
 * Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
 * and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
 * We made 2 refueling stops along the way, so we return 2.
 *
 */

class MaxHeap {
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
      if (this.heap[p] >= this.heap[i]) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  _bubbleDown() {
    let i = 0,
      n = this.heap.length;
    while (true) {
      let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;
      if (left < n && this.heap[left] > this.heap[largest]) largest = left;
      if (right < n && this.heap[right] > this.heap[largest]) largest = right;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      i = largest;
    }
  }
}

function minRefuelStops(target, startFuel, stations) {
  let heap = new MaxHeap();
  let i = 0,
    stops = 0,
    fuel = startFuel;

  while (fuel < target) {
    while (i < stations.length && stations[i][0] <= fuel) {
      heap.push(stations[i][1]);
      i++;
    }
    if (heap.size() === 0) return -1;
    fuel += heap.pop();
    stops++;
  }
  return stops;
}

// Example
console.log(
  minRefuelStops(100, 10, [
    [10, 60],
    [20, 30],
    [30, 30],
    [60, 40],
  ])
); // 2

// Big O:
// Time: O(n log n) (sorting + heap operations)
// Space: O(n)
