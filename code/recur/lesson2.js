export default (str, words) => {
  // TODO 这个递归会内存溢出
  const num = words.length;
  const result = [];
  // 找出所有的排列组合
  const range = (r, _arr) => {
    if (r.length === num) {
      result.push(r);
    } else {
      _arr.forEach((item, idx) => {
        const tmp = [].concat(_arr);
        tmp.splice(idx, 1); // 当前位置踢出去
        range(r.concat(item), tmp);
      });
    }
  };
  // 去重
  function handleRepeat(arr) {
    return [...new Set(arr)];
  }
  // 获取所有的索引
  function getIndex(str, arr) {
    const target = arr.join('');
    const tarLen = target.length;
    const len = str.length - tarLen;
    const result = [];
    if (len < 0) return result;
    for (let i = 0; i <= len; i++) {
      if (str.substring(i, i + tarLen) === target) {
        result.push(i);
      }
    }
    return result;
  }
  range([], words);
  return handleRepeat(result.reduce((acc, item) => {
    return acc.concat(getIndex(str, item));
  }, []).sort((a, b) => a - b));
};
