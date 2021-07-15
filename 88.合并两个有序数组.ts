/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n;
  while (m > 0 && n > 0) {
    index--;
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[index] = nums1[--m];
    } else {
      nums1[index] = nums2[--n];
    }
  }
  while (n > 0) {
    index--;
    nums1[index] = nums2[--n];
  }
}
// @lc code=end
