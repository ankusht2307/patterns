/**
 *
 * Problem Statement: Median of Two Sorted Arrays (LC 4)
 *
 */

const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

  let x = nums1.length,
    y = nums2.length;
  let low = 0,
    high = x;

  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let minX = partitionX === x ? Infinity : nums1[partitionX];

    let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minY = partitionY === y ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// Complexities:
// Time: O(log(min(n,m)))
// Space: O(1)
