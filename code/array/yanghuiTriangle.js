// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

function yanghuiTriangle(numRows) {
  // 思路1 动态规划
  // * 确定dp数组以及下标的含义
  // dp数组下标是杨辉三角的第几行, dp数组是第几行的数据
  // * 确定递推公式
  // dp[i][n] = dp[i-1][n-1] + dp[i-1][n] (i>2)
  // * dp数组如何初始化
  // dp[1] = [1], dp[2] = [1, 1], 从第三行开始遍历
  // * 确定遍历顺序
  // 直接遍历numRows遍
  // * 举例推导dp数组
  // dp[1] = [1]
  // dp[2] = [1, 1]
  // dp[3] = [1, 2,1]
  // dp[4] = [1, 3 , 3, 1]
  // dp[5] = [1, 4, 6, 4, 1]

  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const dp = [[1], [1, 1]]; // 初始化一行和二行
  for (let i = 2; i < numRows; i++) {
    dp[i] = new Array(i + 1);
    dp[i][0] = 1;
    dp[i][i] = 1;
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }
  return dp;
};
export default yanghuiTriangle;
