/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let index = -1;
  for (const iterator of nums) {
    if (nums[index] !== iterator) {
      nums[++index] = iterator;
    }
  }
  return index + 1;
}
// @lc code=end
