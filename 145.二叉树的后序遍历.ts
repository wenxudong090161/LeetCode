/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
  let vals: number[] = [];
  let nodes: TreeNode[] = [root];
  while (nodes.length) {
    let node = nodes.pop();
    if (node) {
      if (node.left || node.right) {
        nodes.push(node);
        nodes.push(node.right);
        nodes.push(node.left);
        node.right = null;
        node.left = null;
      } else {
        vals.push(node.val);
      }
    }
  }
  return vals;
}
// @lc code=end

// 迭代
// function postorderTraversal(root: TreeNode | null): number[] {
//   let vals: number[] = [];
//   let nodes: TreeNode[] = [root];
//   while (nodes.length) {
//     let node = nodes.pop();
//     if (node) {
//       if (node.left || node.right) {
//         nodes.push(node);
//         nodes.push(node.right);
//         nodes.push(node.left);
//         node.right = null;
//         node.left = null;
//       } else {
//         vals.push(node.val);
//       }
//     }
//   }
//   return vals;
// }

// 递归
// function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) {
//     return [];
//   }
//   return [
//     ...postorderTraversal(root.left),
//     ...postorderTraversal(root.right),
//     root.val,
//   ];
// }
