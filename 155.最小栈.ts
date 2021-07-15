/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
  private stack1 = [];
  private stack2 = [];

  constructor() {}

  push(val: number): void {
    this.stack1.push(val);
    if (this.stack2.length) {
      this.stack2.push(Math.min(val, this.getMin()));
    } else {
      this.stack2.push(val);
    }
  }

  pop(): void {
    this.stack1.pop();
    this.stack2.pop();
  }

  top(): number {
    let val = this.stack1.pop();
    this.stack1.push(val);
    return val;
  }

  getMin(): number {
    let val = this.stack2.pop();
    this.stack2.push(val);
    return val;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// 时间复杂度为 O(1)、空间复杂度为 O(n)
