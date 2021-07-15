/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  return nums.reduce(
    (previousValue, currentValue) => previousValue ^ currentValue
  );
}
// @lc code=end
