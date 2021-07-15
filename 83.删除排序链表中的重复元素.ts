/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let l1: ListNode = head;
  let l2: ListNode = head;
  while (l1 && (l2 = l2.next)) {
    if (l1.val !== l2.val) {
      l1.next = l2;
      l1 = l1.next;
    }
  }
  if (l1) {
    l1.next = null;
  }
  return head;
}
// @lc code=end
