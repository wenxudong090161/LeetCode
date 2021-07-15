/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const LEFT = { ")": "(", "]": "[", "}": "{" };
  const RIGHT = [")", "]", "}"];
  let arr = [];
  for (const iterator of s) {
    if (RIGHT.includes(iterator)) {
      if (arr.pop() !== LEFT[iterator]) {
        return false;
      }
    } else {
      arr.push(iterator);
    }
  }
  return arr.length === 0;
}
// @lc code=end
