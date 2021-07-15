/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  private stack1 = [];
  private stack2 = [];

  constructor() {}

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek(): number {
    let num = this.pop();
    this.stack2.push(num);
    return num;
  }

  empty(): boolean {
    return this.stack1.length + this.stack2.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

// O(1)

// O(n)
// class MyQueue {
//   private stack1 = [];
//   private stack2 = [];

//   constructor() {}

//   push(x: number): void {
//     this.stack1.push(x);
//   }

//   pop(): number {
//     while (this.stack1.length) {
//       this.stack2.push(this.stack1.pop());
//     }
//     let num = this.stack2.pop();
//     while (this.stack2.length) {
//       this.stack1.push(this.stack2.pop());
//     }
//     return num;
//   }

//   peek(): number {
//     while (this.stack1.length) {
//       this.stack2.push(this.stack1.pop());
//     }
//     let num = this.stack2.pop();
//     this.stack1.push(num);
//     while (this.stack2.length) {
//       this.stack1.push(this.stack2.pop());
//     }
//     return num;
//   }

//   empty(): boolean {
//     return this.stack1.length === 0;
//   }
// }
