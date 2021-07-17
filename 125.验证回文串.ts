/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let a = 0;
  let b = s.length - 1;
  while (a < b) {
    let charA;
    let charB;
    do {
      charA = s[a];
      a++;
    } while ((charA < "0" || charA > "9") && (charA < "a" || charA > "z"));
    do {
      charB = s[b];
      b--;
    } while ((charB < "0" || charB > "9") && (charB < "a" || charB > "z"));
    if (charA !== charB) {
      return false;
    }
  }
  return true;
}
// @lc code=end

// function isPalindrome(s: string): boolean {
//   let arr = s
//     .toLowerCase()
//     .split("")
//     .filter(
//       (char) => (char >= "0" && char <= "9") || (char >= "a" && char <= "z")
//     );
//   let a = arr.join("");
//   let b = arr.reverse().join("");
//   return a === b;
// }
