/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let listNode = head;
  let arr: ListNode[] = [];
  do {
    arr.push(listNode);
  } while ((listNode = listNode.next));
  arr.reduceRight((previousValue, currentValue) => {
    previousValue.next = currentValue;
    return currentValue;
  });
  arr[0].next = null;
  return arr.pop();
}
// @lc code=end

// 迭代
// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head) {
//     return head;
//   }
//   let listNode = head;
//   let arr: ListNode[] = [];
//   do {
//     arr.push(listNode);
//   } while ((listNode = listNode.next));
//   arr.reduceRight((previousValue, currentValue) => {
//     previousValue.next = currentValue;
//     return currentValue;
//   });
//   arr[0].next = null;
//   return arr.pop();
// }

// 递归
// function reverseList(
//   head: ListNode | null,
//   next: ListNode | null = null
// ): ListNode | null {
//   let listNode = head
//   if (head?.next) {
//     listNode = reverseList(head.next, head)
//   }
//   if (head) {
//     head.next = next
//   }
//   return listNode
// }
