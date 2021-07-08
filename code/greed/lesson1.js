export default (prices) => {
  // 用来保存利润
  let count = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) {
      // 下一天的价格比当前天的价格时, 上涨 不卖
      if (prices[j + 1] > prices[j]) {
        count += (prices[j + 1] - prices[j]); // 添加利润
        i = j;
      } else { // 下跌或者不变的情况, 更新起始利润累计点
        i = j;
        break;
      }
    }
  }
  return count;
};
