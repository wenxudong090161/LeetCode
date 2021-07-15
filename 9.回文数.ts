/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let y = 0;
  let temporary = x;
  while (temporary > 0) {
    y = y * 10 + (temporary % 10);
    temporary = Math.floor(temporary / 10);
  }
  return x === y;
}
// @lc code=end

// Number
// function isPalindrome(x: number): boolean {
//   if (x < 0) {
//     return false;
//   }
//   let y = 0;
//   let temporary = x;
//   while (temporary > 0) {
//     y = y * 10 + (temporary % 10);
//     temporary = Math.floor(temporary / 10);
//   }
//   return x === y;
// }

// String
// function isPalindrome(x: number): boolean {
//   if (x < 0) {
//     return false;
//   }
//   return x.toString() === [...x.toString()].reverse().join("");
// }
