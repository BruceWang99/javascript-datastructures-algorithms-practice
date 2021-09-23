// 给定一个m x n的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 进阶：
// 一个直观的解决方案是使用 O(mn)的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用O(m+n)的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？

function setZeroes(matrix) {
  // 思路1, 遍历每一行,每一列, 如果值为0, 把这行这列的所有值, 全部设置为0
  const m = matrix.length;
  const n = matrix[0].length;
  // const cpMatrix = JSON.parse(JSON.stringify(matrix));

  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (cpMatrix[i][j] === 0) {
  //       let ii = i; let ii2 = i;
  //       let jj = j; let jj2 = j;
  //       // 向上 设置 0
  //       while (ii > 0) {
  //         ii--;
  //         matrix[ii][j] = 0;
  //         console.log('ii, j', ii, j);
  //       }
  //       // 向下 设置 0
  //       while (ii2 < m - 1) {
  //         ii2++;
  //         matrix[ii2][j] = 0;
  //         console.log('ii2, j', ii2, j);
  //       }
  //       // 向左 设置 0
  //       while (jj > 0) {
  //         jj--;
  //         matrix[i][jj] = 0;
  //         console.log('i, jj', i, jj);
  //       }
  //       // 向右 设置 0
  //       while (jj2 < n - 1) {
  //         jj2++;
  //         matrix[i][jj2] = 0;
  //         console.log('i, jj2', i, jj2);
  //       }
  //     }
  //   }
  // }
  // return matrix;
  // 学习到的思路2, 遍历数组, 采用辅助的标记数组, 记录有0的行和列(标记为1), 然后在根据标记数组,还原为所在行和列的所有元素都设为 0的数组
  // const rowArr = new Uint16Array(m);
  // const colArr = new Uint16Array(n);
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] === 0) {
  //       rowArr[i] = 1;
  //       colArr[j] = 1;
  //     }
  //   }
  // }
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (rowArr[i] === 1 || colArr[j] === 1) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }
  // 学习到的思路3, 思路2的优化版, 使用原数组的第一行和第一列去代替标记数组, 这个要考虑一个特殊情况, 就是如果第一行和第一列有0, 就要把这行或这列设置为0
  let rowFlag = false; let colFlag = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) { // 第一列中有0, 这一列都为0
      rowFlag = true;
    }
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) { // 第一行中有0, 这一行都为0
      colFlag = true;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // 标记这行都为0
        matrix[0][j] = 0; // 标记这列都为0
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) { // 标记的行和列都要设置为0
        matrix[i][j] = 0;
      }
    }
  }
  if (rowFlag === true) { // 这一列都设置为0
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (colFlag === true) { // 这一行都设置为0
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
  return matrix;
};
export default setZeroes;
