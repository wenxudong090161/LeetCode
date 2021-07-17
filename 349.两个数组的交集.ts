/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let min = set1.size < set2.size ? set1 : set2;
  let max = set1.size < set2.size ? set2 : set1;
  let nums = [];
  min.forEach((num) => {
    if (max.has(num)) {
      nums.push(num);
    }
  });
  return nums;
}
// @lc code=end
