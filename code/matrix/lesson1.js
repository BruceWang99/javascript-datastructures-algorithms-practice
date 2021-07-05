export default (arr) => {
  // 处理每一圈的数量遍历过程
  const map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) { // 最上面一行
        r = r.concat(arr[i]);
      } else if (i === len - 1) { // 最下面一行
        r = r.concat(arr[i].reverse());
      } else { // 最右边的每个数
        r.push(arr[i].pop());
      }
    }
    arr.shift();
    arr.pop();
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].length === 0) break; // 横向数组长度为0, break
      const dd = arr[i].shift();
      r.push(dd); // 最左边的每个数
    }
    if (arr.length !== 0 && arr[0].length !== 0) { // 纵向和横向数组长度都不为0时, 递归
      return map(arr, r);
    } else {
      return r;
    }
  };
  return map(arr, []);
};
