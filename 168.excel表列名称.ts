/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  let str = "";
  const A = "A".charCodeAt(0);
  while (--columnNumber >= 0) {
    let num = (columnNumber % 26) + A;
    str = String.fromCharCode(num).concat(str);
    columnNumber = Math.floor(columnNumber / 26);
  }
  return str;
}
// @lc code=end
