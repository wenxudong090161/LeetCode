/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let a = 0;
  let b = 0;
  let length = nums.length;
  while (a < length) {
    if (nums[a]) {
      nums[b] = nums[a];
      b++;
    }
    a++;
  }
  while (b < length) {
    nums[b] = 0;
    b++;
  }
}
// @lc code=end
