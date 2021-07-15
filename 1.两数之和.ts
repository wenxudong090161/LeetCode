/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let obj = {};
  for (let indexB = 0; indexB < nums.length; indexB++) {
    const elementB = nums[indexB];
    let elementA = target - elementB;
    let indexA = obj[elementA];
    if (indexA !== undefined) {
      return [indexA, indexB];
    }
    obj[elementB] = indexB;
  }
}
// @lc code=end

// O(n)
// function twoSum(nums: number[], target: number): number[] {
//   let obj = {};
//   for (let indexB = 0; indexB < nums.length; indexB++) {
//     const elementB = nums[indexB];
//     let elementA = target - elementB;
//     let indexA = obj[elementA];
//     if (indexA !== undefined) {
//       return [indexA, indexB];
//     }
//     obj[elementB] = indexB;
//   }
// }

// O(n^2)
// function twoSum(nums: number[], target: number): number[] {
//   for (let indexA = 0; indexA < nums.length; indexA++) {
//     for (let indexB = indexA + 1; indexB < nums.length; indexB++) {
//       const elementA = nums[indexA];
//       const elementB = nums[indexB];
//       if (elementA + elementB === target) {
//         return [indexA, indexB];
//       }
//     }
//   }
// }
