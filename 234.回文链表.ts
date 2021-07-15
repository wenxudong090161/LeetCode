/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
  let n = 0;
  let tail: ListNode;
  {
    let node = head;
    do {
      tail = node;
      n++;
    } while ((node = node.next));
  }

  let even = n % 2 === 0;
  n = Math.floor(n / 2);
  {
    let node = head;
    let i = 0;
    while (i < n) {
      i++;
      let previous = node;
      node = node.next;
      if (i === n && even) {
        previous.next = null;
      }
    }

    let next: ListNode;
    let previous = null;
    do {
      next = node.next;
      node.next = previous;
      previous = node;
    } while ((node = next));
  }

  while (head || tail) {
    if (head?.val === tail?.val) {
      head = head.next;
      tail = tail.next;
    } else {
      return false;
    }
  }
  return true;
}

// @lc code=end

// 时间复杂度为 O(n)、空间复杂度为 O(1)

// 时间复杂度为 O(n)、空间复杂度为 O(n)
// function isPalindrome(head: ListNode | null): boolean {
//   let arr = [];
//   do {
//     arr.push(head?.val);
//   } while ((head = head.next));
//   return arr.toString() === arr.reverse().toString();
// }
