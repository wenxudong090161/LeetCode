/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  let count = nums.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + currentIndex - currentValue,
    0
  );
  return nums.length + count;
}
// @lc code=end

// function missingNumber(nums: number[]): number {
//   for (let index = 0; index < nums.length; index++) {
//     while (nums[index] !== index && nums[index] !== undefined) {
//       let num = nums[index];
//       nums[index] = nums[num];
//       nums[num] = num;
//     }
//   }
//   for (let index = 0; index <= nums.length; index++) {
//     if (nums[index] === undefined) {
//       return index;
//     }
//   }
// }
