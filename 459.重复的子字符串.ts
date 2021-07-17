/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const length = s.length;
  const END = s[length - 1];
  const regex = new RegExp(`^.*${END}$`);
  for (let index = 1; index <= length / 2; index++) {
    if (length % index !== 0) {
      continue;
    }
    let str = s.slice(0, index);
    if (!regex.test(str)) {
      continue;
    }
    let time = length / index;
    if (str.repeat(time) === s) {
      return true;
    }
  }
  return false;
}
// @lc code=end
