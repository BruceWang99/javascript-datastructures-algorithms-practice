export default (input) => {
  // 表示自己的钱箱(用于存储零钱)
  const hand = [];
  // 判断是否有顾客还在
  while (input.length) {
    // 取出当前排在最前面顾客的钱
    const money = input.shift();
    // 这种情况不需要找零
    if (money === 5) {
      hand.push(money);
    } else {
      // 降序, 让收银员先找多的,再找少的零钱
      hand.sort((a, b) => b - a);
      // 顾客的钱减去饮料的钱, 找的零钱
      let change = money - 5;
      for (let i = 0, len = hand.length; i < len; i++) {
        // 需要找零的金额, 大于钱箱里的钱的时候
        if (hand[i] <= change) {
          change -= hand[i]; // 把这个钱找给客人
          hand.splice(i, 1); // 把钱从钱箱拿出来
          // 删除了元素, 数组的长度发生了变化, 维持刚才的i不变
          i--;
        }
        if (change === 0) {
          break;
        }
      }
      // 钱找不开了
      if (change !== 0) {
        return false;
      } else {
        // 把顾客的钱收到钱箱
        hand.push(money);
      }
    }
  }
  return true;
};
