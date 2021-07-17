/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number, ac1 = 0, ac2 = 1): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return ac2;
  }
  return fib(n - 1, ac2, ac1 + ac2);
}
// @lc code=end

// function fib(n: number): number {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
