/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  let previous = head;
  let listNode = head?.next;
  while (listNode) {
    if (listNode === head) {
      return true;
    } else {
      let next = listNode.next;
      listNode.next = previous;
      previous = listNode;
      listNode = next;
    }
  }
  return false;
}
// @lc code=end

// 时间复杂度为 O(n)、空间复杂度为 O(1)
// function hasCycle(head: ListNode | null): boolean {
//   let previous = head;
//   let listNode = head?.next;
//   while (listNode) {
//     if (listNode === head) {
//       return true;
//     } else {
//       let next = listNode.next;
//       listNode.next = previous;
//       previous = listNode;
//       listNode = next;
//     }
//   }
//   return false;
// }

// 时间复杂度为 O(n)、空间复杂度为 O(n)
// function hasCycle(head: ListNode | null): boolean {
//   let arr = [];
//   while (head) {
//     if (arr.includes(head)) {
//       return true;
//     } else {
//       arr.push(head);
//     }
//     head = head.next;
//   }
//   return false;
// }
