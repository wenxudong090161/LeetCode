/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  if (x === 0) {
    return x;
  }
  let max = (x > 0 ? (-1 << 31) + 1 : -1 << 31).toString().slice(1);
  let num = [...x.toString()].reverse().join("");
  if (x < 0) {
    num = num.slice(0, -1);
  }
  if (num.length === max.length && num > max) {
    return 0;
  }
  if (x < 0) {
    num = "-" + num;
  }
  return Number.parseInt(num);
}
// @lc code=end
