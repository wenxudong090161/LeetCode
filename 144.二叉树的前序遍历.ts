/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  let vals: number[] = [];
  let nodes: TreeNode[] = [root];
  while (nodes.length) {
    let node = nodes.pop();
    if (node) {
      vals.push(node.val);
      nodes.push(node.right);
      nodes.push(node.left);
    }
  }
  return vals;
}
// @lc code=end

// 迭代
// function preorderTraversal(root: TreeNode | null): number[] {
//   let vals: number[] = [];
//   let nodes: TreeNode[] = [];
//   let node = root;
//   while (node || nodes.length) {
//     if (node) {
//       vals.push(node.val);
//       if (node.right) {
//         nodes.push(node.right);
//       }
//       node = node.left;
//     } else {
//       node = nodes.pop();
//     }
//   }
//   return vals;
// }

// 递归
// function preorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   return [
//     root.val,
//     ...preorderTraversal(root.left),
//     ...preorderTraversal(root.right),
//   ];
// }
