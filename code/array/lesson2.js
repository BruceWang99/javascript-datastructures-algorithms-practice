/*
 * 1. 看懂题目
 * 所有的牌分成x组 组中所有的牌都是一样的牌  并且x大于等于2
 * 2. 分析，推导解法
 * (1)将所有的牌排序, 把相同的牌放到一起, 并记录出相同的牌的数量
 * (2)将相同的牌的组拆解成更小的对, 直到所有的对的数量是x,x大于等于2, 对中的牌是相等的牌(求最大公约数)
 * 3. 将思路转换为代码
 */
export default function (deck) {
  // 卡牌排序
  deck.unshift({});
  // 分组(单张或多张)
  let group = deck.reduce((deckMap, element) => {
    deckMap[element] ? (deckMap[element] += 1) : (deckMap[element] = 1);
    return deckMap;
  });
  group = Object.values(group);
  // 求最大公约数
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  // 求所有数的最大公约数
  while (group.length > 1) {
    const a = group.shift();
    const b = group.shift();
    const v = gcd(a, b);
    if (v === 1) {
      return false;
    } else {
      group.unshift(v);
    }
  }
  return group.length ? group[0] > 1 : false;
}
