/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let count = {};
  for (const iterator of s) {
    if (!count[iterator]) {
      count[iterator] = 0;
    }
    count[iterator]++;
  }
  for (const iterator of t) {
    if (!count[iterator]) {
      count[iterator] = 0;
    }
    count[iterator]--;
  }
  for (const iterator of Object.values(count)) {
    if (iterator !== 0) {
      return false;
    }
  }
  return true;
}
// @lc code=end
