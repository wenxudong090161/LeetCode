/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let a = 1;
    let b = n;
    while (a !== b) {
      let version = a + Math.floor((b - a) / 2);
      if (isBadVersion(version)) {
        b = version;
      } else {
        a = version + 1;
      }
    }
    return a;
  };
};
// @lc code=end
