/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let obj = {};
  for (let indexB = 0; indexB < numbers.length; indexB++) {
    const elementB = numbers[indexB];
    let elementA = target - elementB;
    let indexA = obj[elementA];
    if (indexA !== undefined) {
      return [indexA + 1, indexB + 1];
    }
    obj[elementB] = indexB;
  }
}
// @lc code=end
