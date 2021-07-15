/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }
  let power = Math.log2(n);
  return Number.isInteger(power);
}
// @lc code=end

// Math
// function isPowerOfTwo(n: number): boolean {
//   if (n < 1) {
//     return false;
//   }
//   let power = Math.log2(n);
//   return Number.isInteger(power);
// }

// String
// function isPowerOfTwo(n: number): boolean {
//   if (n < 1) {
//     return false
//   }
//   let str = n.toString(2)
//   return str === '1'.padEnd(str.length, '0')
// }
