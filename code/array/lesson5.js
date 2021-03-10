/*
 * 1. 看懂题目
 *
 * 2. 分析，推导解法
 *
 * 3. 将思路转换为代码
 *
 */
export default function (n) {
  // 格雷编码递归
  const make = (n) => {
    if (n === 1) {
      return ["0", "1"];
    } else {
      const prev = make(n - 1);
      const result = [];
      const max = Math.pow(2, n) - 1;
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`;
        result[max - i] = `1${prev[i]}`;
      }
      return result;
    }
  };
  return make(n).map((item) => parseInt(item, 2));
}
