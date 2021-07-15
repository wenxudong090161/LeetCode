/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let max = a.length > b.length ? a : b;
  let min = a.length > b.length ? b : a;
  let lengthMax = max.length;
  let lengthMin = min.length;
  let digits = [...max].map((value) => Number.parseInt(value));
  for (let index = 1; index <= lengthMin; index++) {
    digits[lengthMax - index] =
      digits[lengthMax - index] + Number.parseInt(min[lengthMin - index]);
  }
  let index = lengthMax - 1;
  while (index > 0) {
    if (digits[index] > 1) {
      digits[index] = digits[index] % 2;
      digits[index - 1]++;
    }
    index--;
  }
  if (digits[0] > 1) {
    digits[0] = digits[0] % 2;
    digits.unshift(1);
  }
  return digits.join("");
}
// @lc code=end
