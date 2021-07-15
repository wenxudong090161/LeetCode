/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  let treeHeight = function (root: TreeNode | null, height: number = 1) {
    if (!root) {
      return height - 1;
    }
    let heightLeft = treeHeight(root.left, height + 1);
    let heightRight = treeHeight(root.right, height + 1);
    let diameter = heightLeft - height + (heightRight - height);
    max = Math.max(max, diameter);
    return Math.max(heightLeft, heightRight);
  };
  treeHeight(root);
  return max;
}
// @lc code=end
