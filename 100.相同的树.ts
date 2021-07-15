/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p?.val !== q?.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// @lc code=end

// 递归
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   let treeP = [p];
//   let treeQ = [q];
//   for (const tree of [treeP, treeQ]) {
//     for (let index = 0; index < tree.length; index++) {
//       const element = tree[index];
//       if (element) {
//         tree.push(element.left, element.right);
//       }
//     }
//   }
//   if (treeP.length !== treeQ.length) {
//     return false;
//   }
//   for (let index = 0; index < treeP.length; index++) {
//     if (treeP[index]?.val !== treeQ[index]?.val) {
//       return false;
//     }
//   }
//   return true;
// }

// 循环
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   if (p === null && q === null) {
//     return true;
//   }
//   if (p?.val !== q?.val) {
//     return false;
//   }
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }