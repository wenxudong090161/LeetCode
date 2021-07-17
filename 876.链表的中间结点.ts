/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
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

function middleNode(head: ListNode | null): ListNode | null {
  let count = 0;
  {
    let node = head;
    while ((node = node.next)) {
      count++;
    }
  }
  {
    let node = head;
    let middle = Math.ceil(count / 2);
    while (middle-- > 0) {
      node = node.next;
    }
    return node;
  }
}
// @lc code=end
