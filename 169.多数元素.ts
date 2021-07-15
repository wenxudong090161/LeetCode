/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let a = 0;
  let b = 0;
  while (++b < nums.length) {
    if (nums[a] !== nums[b]) {
      nums[a] = null;
      nums[b] = null;
      while (nums[a] === null) {
        a++;
      }
      b = Math.max(a, b);
    }
  }
  return nums[a];
}
// @lc code=end

// 时间复杂度为 O(n)、空间复杂度为 O(1)
// function majorityElement(nums: number[]): number {
//   let a = 0;
//   let b = 0;
//   while (++b < nums.length) {
//     if (nums[a] !== nums[b]) {
//       nums[a] = null;
//       nums[b] = null;
//       while (nums[a] === null) {
//         a++;
//       }
//       b = Math.max(a, b);
//     }
//   }
//   return nums[a];
// }

// 时间复杂度为 O(n)、空间复杂度为 O(n)
// function majorityElement(nums: number[]): number {
//   let count = {};
//   let majority = nums.length / 2;
//   for (const iterator of nums) {
//     if (count[iterator]) {
//       count[iterator]++;
//     } else {
//       count[iterator] = 1;
//     }
//     if (count[iterator] >= majority) {
//       return iterator;
//     }
//   }
// }
