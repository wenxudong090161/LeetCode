/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree root.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  if (root.val === targetSum && !root.left && !root.right) {
    return true;
  }
  if (root.left) {
    root.left.val = root.left.val + root.val;
  }
  if (root.right) {
    root.right.val = root.right.val + root.val;
  }
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}
// @lc code=end

// 递归
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   if (!root) {
//     return false;
//   }
//   if (root.val === targetSum && !root.left && !root.right) {
//     return true;
//   }
//   if (root.left) {
//     root.left.val = root.left.val + root.val;
//   }
//   if (root.right) {
//     root.right.val = root.right.val + root.val;
//   }
//   return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
// }

// 迭代
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   let arr = [root];
//   for (let index = 0; index < arr.length; index++) {
//     const root = arr[index];
//     if (root) {
//       if (root.val === targetSum && !root.left && !root.right) {
//         return true;
//       }
//       if (root.left) {
//         root.left.val = root.left.val + root.val;
//         arr.push(root.left);
//       }
//       if (root.right) {
//         root.right.val = root.right.val + root.val;
//         arr.push(root.right);
//       }
//     }
//   }
//   return false;
// }
