/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  const A = "A".charCodeAt(0) - 1;
  let num = 0;
  for (const iterator of columnTitle) {
    num = iterator.charCodeAt(0) - A + num * 26;
  }
  return num;
}
// @lc code=end
