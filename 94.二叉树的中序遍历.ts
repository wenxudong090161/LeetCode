/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function inorderTraversal(root: TreeNode | null): number[] {
  let vals: number[] = [];
  let nodes: TreeNode[] = [];
  let node = root;
  while (node || nodes.length) {
    if (node) {
      nodes.push(node);
      node = node.left;
    } else {
      node = nodes.pop();
      vals.push(node.val);
      node = node.right;
    }
  }
  return vals;
}
// @lc code=end

// 迭代
// function inorderTraversal(root: TreeNode | null): number[] {
//   let vals: number[] = [];
//   let nodes: TreeNode[] = [];
//   let node = root;
//   while (node || nodes.length) {
//     if (node) {
//       if (node.left) {
//         nodes.push(node);
//         node = node.left;
//       } else {
//         vals.push(node.val);
//         node = node.right;
//       }
//     } else {
//       node = nodes.pop();
//       vals.push(node.val);
//       node = node.right;
//     }
//   }
//   return vals;
// }

// 递归
// function inorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   return [
//     ...inorderTraversal(root.left),
//     root.val,
//     ...inorderTraversal(root.right),
//   ];
// }
