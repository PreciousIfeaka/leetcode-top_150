/**
 * Do not return anything, modify nums1 in-place instead.
 * O(n) time and O(1) space

 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  for (let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i];
  };
  nums1.sort((a, b) => a - b);
  return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));