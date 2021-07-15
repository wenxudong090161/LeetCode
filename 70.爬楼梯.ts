/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let arr = [1, 1];
  for (let index = 2; index <= n; index++) {
    arr[index] = arr[index - 1] + arr[index - 2];
  }
  return arr[n];
}
// @lc code=end
