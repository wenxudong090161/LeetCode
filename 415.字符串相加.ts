/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let length = Math.max(num1.length, num2.length);
  num1 = num1.padStart(length, "0");
  num2 = num2.padStart(length, "0");

  let digits = [];
  for (let index = 0; index < length; index++) {
    digits.push(Number.parseInt(num1[index]) + Number.parseInt(num2[index]));
  }

  let index = length;
  while (index > 1) {
    index--;
    if (digits[index] > 9) {
      digits[index] = digits[index] % 10;
      digits[index - 1]++;
    }
  }
  if (digits[0] > 9) {
    digits[0] = digits[0] % 10;
    digits.unshift(1);
  }
  return digits.join('');
}
// @lc code=end
