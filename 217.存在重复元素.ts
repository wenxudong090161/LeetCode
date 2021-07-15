/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let set = new Set(nums);
  return nums.length !== set.size;
}
// @lc code=end
