export default (arr) => {
  // 控制遍历多少次
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    // 控制遍历的边界
    for (let j = 0; j < i; j++) {
      tmp = arr[j];
      // 互换位置
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};
