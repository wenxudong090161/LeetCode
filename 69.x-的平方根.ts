/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  return Math.trunc(Math.sqrt(x));
}
// @lc code=end

// Math
// function mySqrt(x: number): number {
//   return Math.trunc(Math.sqrt(x));
// }

// Number
// function mySqrt(x: number): number {
//   let num = 1;
//   while (Math.pow(num, 2) <= x) {
//     num++;
//   }
//   return --num;
// }
