/*
 * @lc app=leetcode.cn id=342 lang=typescript
 *
 * [342] 4的幂
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  if (n < 1) {
    return false
  }
  let power = Math.log2(n) / 2
  return Number.isInteger(power)
}
// @lc code=end

// Math
// function isPowerOfFour(n: number): boolean {
//   if (n < 1) {
//     return false
//   }
//   let power = Math.log2(n) / 2
//   return Number.isInteger(power)
// }

// String
// function isPowerOfFour(n: number): boolean {
//   if (n < 1) {
//     return false;
//   }
//   let str = n.toString(2);
//   return str.length & 1 && str === "1".padEnd(str.length, "0");
// }