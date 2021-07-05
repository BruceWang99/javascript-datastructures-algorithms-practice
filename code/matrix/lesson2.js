export default (arr) => {
  // 获取数组的维度
  const vecor = arr.length;
  // 垂直翻转
  for (let i = 0, len = vecor / 2; i < len; i++) { // 中心轴上方行遍历
    for (let j = 0, tmp; j < vecor; j++) { // 访问所有的列
      // 中心轴上下交换
      tmp = arr[i][j];
      arr[i][j] = arr[vecor - i - 1][j];
      arr[vecor - i - 1][j] = tmp;
    }
  }
  // 对角线翻转
  for (let i = 0; i < vecor; i++) { // 遍历所有的行
    for (let j = 0, tmp; j < i; j++) {
      // 中心轴两边交换
      tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
    }
  }
  return arr;
};
