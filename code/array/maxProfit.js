// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

function maxProfit(prices) {
  // 思路1, 向排序, 排序完从两端找符合要求的最大利润, 算法低效,栈溢出了(思路1 有点贪心算法的意思了, 不够彻底)
  // const len = prices.length;
  // function getPrice(price, index) {
  //   return typeof price === 'number' ? {
  //     index,
  //     value: price
  //   } : price;
  // }
  // // 排序
  // for (let i = 0; i < len; i++) {
  //   prices[i] = getPrice(prices[i], i);
  //   for (let j = i + 1; j < len; j++) {
  //     prices[j] = getPrice(prices[j], j);
  //     const tmp = prices[i];
  //     if (prices[i].value > prices[j].value) {
  //       prices[i] = prices[j];
  //       prices[j] = tmp;
  //     }
  //   }
  // }
  // // 获取最大利润
  // function profit(prices) {
  //   const copePrices = prices.slice();
  //   if (copePrices[copePrices.length - 1].index < prices[0].index) {
  //     return Math.max(profit(prices.slice(0, -1)), profit(prices.slice(1)));
  //   } else {
  //     return prices[copePrices.length - 1].value - prices[0].value;
  //   }
  // }
  // return profit(prices);
  // 思路2, 思路1的优化版;贪心算法
  // 遍历整个数组,  用一个变量存最小的值, 每次遍历都和当前的值比较,取最小的值, 用一个变量保存最大利润, 每次遍历把当前值和最小的值相减, 再与最大利润值相比较, 取最大的值
  let minVal = null;
  let profit = 0;
  prices.forEach((price, index) => {
    minVal = index === 0 ? minVal = price : Math.min(minVal, price);
    profit = Math.max(price - minVal, profit);
  });
  return profit;
};
export default maxProfit;
