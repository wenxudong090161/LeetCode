/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  let isBalanced = true;
  let treeHeight = function (root: TreeNode | null, height: number = 0) {
    if (!root) {
      return height;
    }
    let heightLeft = treeHeight(root.left, height + 1);
    let heightRight = treeHeight(root.right, height + 1);
    if (Math.abs(heightLeft - heightRight) > 1) {
      isBalanced = false;
    }
    return Math.max(heightLeft, heightRight);
  };
  treeHeight(root);
  return isBalanced;
}
// @lc code=end
