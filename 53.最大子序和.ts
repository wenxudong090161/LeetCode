/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let max = 0;
  let sum = 0;
  for (const iterator of nums) {
    sum = Math.max(0, iterator + sum);
    max = Math.max(max, sum);
  }
  if (max === 0) {
    return Math.max(...nums);
  } else {
    return max;
  }
}
// @lc code=end
