export default function (deck) {
  // 卡牌排序
  const str = deck.sort().join("");
  // 分组(单张或多张)
  const group = str.match(/(\d)\1+|\d/g);
  // 求最大公约数
  const gcd = function (a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  while (group.length > 1) {
    const a = group.shift().length;
    const b = group.shift().length;
    const v = gcd(a, b);
    if (v === 1) {
      return false;
    } else {
      group.unshift("0".repeat(v));
    }
  }
  return group.length ? group[0].length > 1 : false;
}
