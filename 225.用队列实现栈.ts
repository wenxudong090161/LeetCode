/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyQueue {
  private queue = {};
  private start = 0;
  private end = 0;

  constructor() {}

  push(x: number | MyQueue): void {
    this.queue[this.end] = x;
    this.end++;
  }

  pop(): number | MyQueue {
    let num = this.queue[this.start];
    this.start++;
    return num;
  }

  peek(): number | MyQueue {
    return this.queue[this.start];
  }

  empty(): boolean {
    return this.start === this.end;
  }

  size(): number {
    return this.end - this.start;
  }
}

class MyStack {
  private queue = new MyQueue();

  constructor() {}

  push(x: number): void {
    let queue = new MyQueue();
    queue.push(x);
    queue.push(this.queue);
    this.queue = queue;
  }

  pop(): number {
    let num = this.queue.pop() as number;
    this.queue = this.queue.pop() as MyQueue;
    return num;
  }

  top(): number {
    return this.queue.peek() as number;
  }

  empty(): boolean {
    return this.queue.empty();
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

// class MyQueue {
//   private queue = {};
//   private start = 0;
//   private end = 0;

//   constructor() {}

//   push(x: number): void {
//     this.queue[this.end] = x;
//     this.end++;
//   }

//   pop(): number {
//     let num = this.queue[this.start];
//     this.start++;
//     return num;
//   }

//   peek(): number {
//     return this.queue[this.start];
//   }

//   empty(): boolean {
//     return this.start === this.end;
//   }

//   size(): number {
//     return this.end - this.start;
//   }
// }

// O(n)
// class MyStack {
//   private queue = new MyQueue();

//   constructor() {}

//   push(x: number): void {
//     this.queue.push(x);
//     let index = this.queue.size();
//     while (index-- > 1) {
//       this.queue.push(this.queue.pop());
//     }
//   }

//   pop(): number {
//     return this.queue.pop();
//   }

//   top(): number {
//     return this.queue.peek();
//   }

//   empty(): boolean {
//     return this.queue.empty();
//   }
// }
// O(n)
// class MyStack {
//   private queue = new MyQueue();

//   constructor() {}

//   push(x: number): void {
//     this.queue.push(x);
//   }

//   pop(): number {
//     let index = this.queue.size();
//     while (index-- > 1) {
//       this.queue.push(this.queue.pop());
//     }
//     return this.queue.pop();
//   }

//   top(): number {
//     let index = this.queue.size();
//     while (index-- > 1) {
//       this.queue.push(this.queue.pop());
//     }
//     let item = this.queue.pop();
//     this.queue.push(item);
//     return item;
//   }

//   empty(): boolean {
//     return this.queue.empty();
//   }
// }
