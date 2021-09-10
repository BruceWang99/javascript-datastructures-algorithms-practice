// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 条件1、数字 1-9 在每一行只能出现一次。
// 条件2、数字 1-9 在每一列只能出现一次。
// 条件3、数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。
// 注意：
// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。

function isValidSudoku(board) {
  // 思路1, 依次写出满足条件1,2,3的算法, 如果条件都满足, 就是有效的

  for (let i = 0; i < 9; i++) {
    // 数字1-9在每一行只能出现一次。
    const rmap = new Map();
    for (const num of board[i]) {
      if (rmap.has(num)) {
        return false;
      }
      if (num !== '.') {
        rmap.set(num, 1);
      }
    }
    console.log('rmap', rmap);
    // 数字1-9在每一列只能出现一次。
    const cmap = new Map();
    for (const row of board) {
      if (cmap.has(row[i])) {
        return false;
      }
      if (row[i] !== '.') {
        cmap.set(row[i], 1);
      }
    }
    console.log('cmap', cmap);

    // 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
    // 思路: 宫内数组的下标都是0+3*n到2+3*n (n>=0 && n<=2)
    for (let c2 = 0; c2 <= 6; c2 = c2 + 3) {
      for (let c = 0; c <= 6; c = c + 3) {
        const tmap = new Map();
        for (let j = c; j <= c + 2; j++) {
          for (let k = c2; k <= c2 + 2; k++) {
            if (tmap.has(board[j][k])) {
              return false;
            }
            if (board[j][k] !== '.') {
              tmap.set(board[j][k], 1);
            }
          }
        }
      }
    }
  }
  return true;
};
export default isValidSudoku;
