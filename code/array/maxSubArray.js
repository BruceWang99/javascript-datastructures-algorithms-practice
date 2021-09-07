// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
function maxSubArray(nums) {
  // 思路1, 找出所有的连续子数组, 并求和; 然后找出最大和
  // (1) 找出所有的连续子数组
  // (1.1) 按照子数组的长度分类, 分类范围是[1, nums.length - 1]
  // (1.2) 找长度相等的子数组 slice(start,end) [start, end)
  // (2)求最大和
  // 这种方式 超过时间限制了, O(n^2)
  //   let maxSum = null;
  //   const len = nums.length;
  //   const maxIndex = len - 1;
  //   for (let i = len; i >= 1; i--) { // 按照子数组的长度分类
  //     let start = 0;
  //     let end = start + i;
  //     while (start <= maxIndex && end <= len) {
  //       const subArr = nums.slice(start, end); // 连续子数组
  //       const sum = subArr.reduce((acc, num) => acc + num, 0); // 子数组和
  //       maxSum === null ? maxSum = sum : maxSum = Math.max(maxSum, sum); // 求最大的和
  //       ++start;
  //       ++end;
  //     }
  //   }
  //   return maxSum;

  // 思路2: 动态规划
  // 子序列和, 要么和前面的值合并, 要么不合并
  // 1. 动态方程式: dp[i] = max(dp[i-1] + nums[i], nums[i])
  // 2. 初始值: nums[0]
  // 3. 终止值: dp[nums.length - 1]
  //   const dp = [nums[0]]; // dp设置初始值
  //   let maxSum = dp[0]; // 设置默认最大的和
  //   for (let i = 1; i < nums.length; i++) {
  //     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]); // 要么和现在的值合并, 要么不合并
  //     maxSum = Math.max(maxSum, dp[i]); // 所有子序列和中,找最大的
  //   }
  //   return maxSum;

  // 动态规划 优化版, 节省空间复杂度
  let maxSum = nums[0]; // 设置默认最大的和
  let sum = nums[0]; // 子序列和初始值
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]); // 要么和现在的值合并, 要么不合并
    maxSum = Math.max(maxSum, sum); // 所有子序列和中,找最大的
  }
  return maxSum;
};
export default maxSubArray;
