// 给定一个m x n的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 进阶：
// 一个直观的解决方案是使用 O(mn)的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用O(m+n)的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？

function setZeroes(matrix) {
  // 思路1, 遍历每一行,每一列, 如果值为0, 把这行这列的所有值, 全部设置为0
  const m = matrix.length;
  const n = matrix[0].length;
  const cpMatrix = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (cpMatrix[i][j] === 0) {
        let ii = i; let ii2 = i;
        let jj = j; let jj2 = j;
        // 向上 设置 0
        while (ii > 0) {
          ii--;
          matrix[ii][j] = 0;
          console.log('ii, j', ii, j);
        }
        // 向下 设置 0
        while (ii2 < m - 1) {
          ii2++;
          matrix[ii2][j] = 0;
          console.log('ii2, j', ii2, j);
        }
        // 向左 设置 0
        while (jj > 0) {
          jj--;
          matrix[i][jj] = 0;
          console.log('i, jj', i, jj);
        }
        // 向右 设置 0
        while (jj2 < n - 1) {
          jj2++;
          matrix[i][jj2] = 0;
          console.log('i, jj2', i, jj2);
        }
      }
    }
  }
  return matrix;
};
export default setZeroes;
