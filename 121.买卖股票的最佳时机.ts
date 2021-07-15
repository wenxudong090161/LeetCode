/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let price = 0;
  let min = prices[0];
  for (const iterator of prices) {
    if (min > iterator) {
      min = iterator;
    }
    if (price < iterator - min) {
      price = iterator - min;
    }
  }
  return price;
}
// @lc code=end

// O(n)
// function maxProfit(prices: number[]): number {
//   let price = 0;
//   let min = prices[0];
//   for (const iterator of prices) {
//     if (min > iterator) {
//       min = iterator;
//     }
//     if (price < iterator - min) {
//       price = iterator - min;
//     }
//   }
//   return price;
// }

// O(n^2)
// function maxProfit(prices: number[]): number {
//   let price = 0;
//   for (let indexA = 0; indexA < prices.length; indexA++) {
//     for (let indexB = indexA + 1; indexB < prices.length; indexB++) {
//       const elementA = prices[indexA];
//       const elementB = prices[indexB];
//       let temporary = elementB - elementA;
//       if (temporary > price) {
//         price = temporary;
//       }
//     }
//   }
//   return price;
// }
