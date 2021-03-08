/*
 * 1. 看懂题目
 * 动态和的数组长度为nums的长度, 动态和的第一项为nums的第一项, 动态和的第二项为nums的第一项加nums的第二项, 动态和的第三项为nums的第一项加nums的第二项加nums的第三项,直到动态和的数组长度为nums的长度
 * 2. 分析，推导解法
 * (1) 一次循环
 * (2) 循环中做 动态和一次求解
 * (3) 返回runningSum
 * 3. 将思路转换为代码
 * (1) 遍历nums.length次
 * (2) 遍历中做的是 动态和每一次的求解  runningSum[i] = sum(nums[0]+nums[1]+…nums[i])
 * (3) 返回runningSum
 */
// (方法1)
// var runningSum = function(nums) {
//     let runningSum = [];
//     function runningSumItem(i) {
//         let item = 0;
//         for(let j = 0; j <= i; j++){
//             item+=nums[j];
//         }
//         return item;
//     }
//     for(let i = 0, len = nums.length; i < len; i++){
//         runningSum.push(runningSumItem(i));
//     }
//     return runningSum;
// };
// (方法2)
export default function (nums) {
  let num = null;
  return nums.map((item) => {
    num += item;
    return num;
  });
}
