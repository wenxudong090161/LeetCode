/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  let func = function (left: TreeNode | null, right: TreeNode | null): boolean {
    if (left && right) {
      return (
        left.val === right.val &&
        func(left.left, right.right) &&
        func(left.right, right.left)
      );
    }
    return left?.val === right?.val;
  };
  return func(root.left, root.right);
}
// @lc code=end

// 递归
// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root) {
//     return true;
//   }
//   let func = function (left: TreeNode | null, right: TreeNode | null): boolean {
//     if (left && right) {
//       return (
//         left.val === right.val &&
//         func(left.left, right.right) &&
//         func(left.right, right.left)
//       );
//     }
//     return left?.val === right?.val;
//   };
//   return func(root.left, root.right);
// }

// 迭代
// function isSymmetric(root: TreeNode | null): boolean {
//   let arr1: TreeNode[] = [root];
//   let arr2: TreeNode[] = [root];
//   for (let index = 0; index < arr1.length; index++) {
//     const node = arr1[index];
//     if (node) {
//       arr1.push(node.left);
//       arr1.push(node.right);
//     }
//   }
//   for (let index = 0; index < arr2.length; index++) {
//     const node = arr2[index];
//     if (node) {
//       arr2.push(node.right);
//       arr2.push(node.left);
//     }
//   }
//   for (let index = 0; index < arr1.length; index++) {
//     if (arr1[index]?.val !== arr2[index]?.val) {
//       return false;
//     }
//   }
//   return true;
// }
