/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let count = 0;
  while (n !== 0) {
    n = (n - 1) & n;
    count++;
  }
  return count;
}
// @lc code=end

// function hammingWeight(n: number): number {
//   let count = 0;
//   while (n !== 0) {
//     n = (n - 1) & n;
//     count++;
//   }
//   return count;
// }

// function hammingWeight(n: number): number {
//   let count = 0;
//   let str = n.toString(2);
//   for (const iterator of str) {
//     if (iterator === "1") {
//       count++;
//     }
//   }
//   return count;
// }
