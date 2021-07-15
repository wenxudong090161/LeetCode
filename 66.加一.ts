/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;
  digits[index]++;
  while (index > 0) {
    if (digits[index] > 9) {
      digits[index] = 0;
      digits[index - 1]++;
    } else {
      break;
    }
    index--;
  }
  if (digits[0] > 9) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
}
// @lc code=end
