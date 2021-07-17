/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
  let index = 0;
  let arr = [];
  for (const iterator of s) {
    if (iterator === arr[index]) {
      index--;
    } else {
      index++;
      arr[index] = iterator;
    }
  }
  arr.splice(index + 1);
  return arr.join("");
}
// @lc code=end
