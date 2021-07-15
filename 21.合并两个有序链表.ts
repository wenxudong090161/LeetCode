/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let first: ListNode;
  if (l1.val < l2.val) {
    first = l1;
    l1 = l1.next;
  } else {
    first = l2;
    l2 = l2.next;
  }
  let l: ListNode = first;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      l.next = l1;
      l = l1;
      l1 = l1.next;
    } else {
      l.next = l2;
      l = l2;
      l2 = l2.next;
    }
  }
  l.next = l1 || l2;
  return first;
}
// @lc code=end
