export default (n) => {
  // 递归函数，用来算输入为n的格雷编码序列
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
  return make(n);
};
