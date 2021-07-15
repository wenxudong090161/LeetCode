/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let temporary = headA;
  while (headA) {
    headA.val = -headA.val;
    headA = headA.next;
  }
  headA = temporary;
  let node: ListNode = null;
  while (headB) {
    if (headB.val < 0) {
      node = headB;
      break;
    }
    headB = headB.next;
  }
  while (headA) {
    headA.val = -headA.val;
    headA = headA.next;
  }
  return node;
}
// @lc code=end

// 时间复杂度为 O(n)、空间复杂度为 O(1)
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   let temporary = headA;
//   while (headA) {
//     headA.val = -headA.val;
//     headA = headA.next;
//   }
//   headA = temporary;
//   let node: ListNode = null;
//   while (headB) {
//     if (headB.val < 0) {
//       node = headB;
//       break;
//     }
//     headB = headB.next;
//   }
//   while (headA) {
//     headA.val = -headA.val;
//     headA = headA.next;
//   }
//   return node;
// }

// 时间复杂度为 O(n^2)、空间复杂度为 O(1)
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   while (headA) {
//     let nodeB = headB;
//     while (nodeB) {
//       if (headA === nodeB) {
//         return headA;
//       }
//       nodeB = nodeB.next;
//     }
//     headA = headA.next;
//   }
//   return null;
// }

// 时间复杂度为 O(n)、空间复杂度为 O(n)
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   let arrA: ListNode[] = [];
//   while (headA) {
//     arrA.push(headA);
//     headA = headA.next;
//   }
//   while (headB) {
//     if (arrA.includes(headB)) {
//       return headB;
//     }
//     headB = headB.next;
//   }
//   return null;
// }

// 时间复杂度为 O(n)、空间复杂度为 O(n)
// function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   let arrA: ListNode[] = [];
//   let arrB: ListNode[] = [];
//   while (headA) {
//     arrA.push(headA);
//     headA = headA.next;
//   }
//   while (headB) {
//     arrB.push(headB);
//     headB = headB.next;
//   }
//   let listNode = null;
//   while (arrA.length && arrB.length) {
//     let NodeA = arrA.pop();
//     let NodeB = arrB.pop();
//     if (NodeA === NodeB) {
//       listNode = NodeA;
//     } else {
//       break;
//     }
//   }
//   return listNode;
// }
