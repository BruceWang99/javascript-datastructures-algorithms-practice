export default (str, words) => {
  // 保存结果
  const result = [];
  // 记录数组的长度，做边界条件计算
  const num = words.length;
  // 递归函数体
  const range = (r, _arr) => {
    if (r.length === num) {
      result.push(r);
    } else {
      _arr.forEach((item, idx) => {
        const tmp = [].concat(_arr);
        tmp.splice(idx, 1);
        range(r.concat(item), tmp);
      });
    }
  };
  range([], words);
  // [0, 9, -1] filter 之后[0,9]
  return result
    .map((item) => {
      return str.indexOf(item.join(""));
    })
    .filter((item) => item !== -1)
    .sort();
};
