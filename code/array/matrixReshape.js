// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

function matrixReshape(mat, r, c) {
  // 思路1 把mat按照行遍历顺序平铺成一条线, 创建一个新数组, 依次按行, 把mat里的数放进来, 一行放完,放第二行
  // const mc = mat[0].length;
  // const mr = mat.length;
  // const result = [];
  // const matLine = [];
  // if (r * c !== mat[0].length * mat.length) return mat;
  // for (let i = 0; i < mr; i++) {
  //   for (let j = 0; j < mc; j++) {
  //     matLine.push(mat[i][j]);
  //   }
  // }
  // for (let i = 0; i < r; i++) {
  //   const row = [];
  //   for (let j = 0; j < c; j++) {
  //     row.push(matLine.shift());
  //   }
  //   result.push(row);
  // }
  // return result;
  // 思路2, 思路1优化, 平铺成直线的逻辑可以放到创建新数组里面
  // const mc = mat[0].length;
  // const mr = mat.length;
  // const result = [];
  // // 边界处理
  // if (r * c !== mc * mr) return mat;

  // let matRow = mat.shift();
  // function getMatVal() {
  //   let val = matRow.shift();
  //   if (val === undefined) {
  //     matRow = mat.shift();
  //     val = matRow.shift();
  //   }
  //   return val;
  // }
  // for (let i = 0; i < r; i++) {
  //   const row = [];
  //   for (let j = 0; j < c; j++) {
  //     const val = getMatVal();
  //     console.log('mRowVal', val, j, c);
  //     row.push(val);
  //   }
  //   result.push(row);
  // }
  // return result;
  // 思路3, 思路2优化, 平铺成直线的逻辑继续优化
  const mc = mat[0].length;
  const mr = mat.length;
  const result = [];
  // 边界处理
  if (r * c !== mc * mr) return mat;

  let fr = 0; let fc = 0;
  function getMatVal() {
    if (fc === mc) {
      fc = 0;
      fr++;
    }
    const val = mat[fr][fc];
    fc++;
    return val;
  }
  for (let i = 0; i < r; i++) {
    const row = [];
    for (let j = 0; j < c; j++) {
      const val = getMatVal();
      row.push(val);
    }
    result.push(row);
  }
  return result;
};
export default matrixReshape;
