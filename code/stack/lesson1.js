export default (arr) => {
  // 用数组实现堆栈结构, pop, push
  const result = []; let pre1; let pre2;
  // 对数组遍历, 处理得分
  arr.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop();
        }
        break;
      case 'D':
        pre1 = result.pop();
        result.push(pre1, pre1 * 2);
        break;
      case '+':
        pre1 = result.pop();
        pre2 = result.pop();
        result.push(pre2, pre1, pre2 + pre1);
        break;
      default:
        result.push(+item);
    }
  });
  return result.reduce((total, item) => {
    return total + item;
  }, 0);
};
