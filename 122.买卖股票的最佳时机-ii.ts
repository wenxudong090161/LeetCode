/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = [0];
  for (let indexA = 0; indexA < prices.length; indexA++) {
    let arr = [...max];
    for (let indexB = 0; indexB < indexA; indexB++) {
      const priceA = prices[indexA];
      const priceB = prices[indexB];
      if (priceA > priceB) {
        arr[indexB] = priceA - priceB + arr[indexB];
      }
    }
    max[indexA] = Math.max(...arr);
  }
  return max.pop();
}
// @lc code=end
