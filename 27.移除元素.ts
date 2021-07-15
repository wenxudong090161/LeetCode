/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let index = 0;
  for (const iterator of nums) {
    if (iterator !== val) {
      nums[index++] = iterator;
    }
  }
  return index;
}
// @lc code=end
