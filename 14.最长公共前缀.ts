/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let min = strs[0];
  for (const str of strs) {
    if (str.length < min.length) {
      min = str;
    }
  }
  let str = "";
  for (let index = 0; index < min.length; index++) {
    const temporary = str.concat(min[index]);
    if (strs.every((value) => value.startsWith(temporary))) {
      str = temporary;
    } else {
      break;
    }
  }
  return str;
}
// @lc code=end
