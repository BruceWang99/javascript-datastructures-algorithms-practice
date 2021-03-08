/*
 * 1. 看懂题目
 * 花不能种植在相邻的地块上(1代表花, 1旁边不能是1), 找到最多能种多少朵花, n小于等于最多的花数就返回true
 * 2. 分析，推导解法
 * (1) 普通情况, 判断插入的位置的前一位和后一位是0, 满足条件
 * (2)边界1, 头部的第一位能不能种, 只需要后一位为0
 * (3)边界2, 尾部的最后一位能不能种, 只需要前一位为0
 * 3. 将思路转换为代码
 * (1)遍历每一位数,判断该位上能不能种花, 并统计记录下来,和n对比, 返回结果
 */
export default (flowerbed, n) => {
  let max = 0; // 计能种的数
  for (let i = 0, len = flowerbed.length - 1; i <= len; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && (flowerbed[1] === 0 || flowerbed[1] === undefined)) {
        // 头部边界
        max++;
        i++;
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        max++;
        i++;
      } else if (i === len && flowerbed[i - 1] === 0) {
        // 尾部边界
        max++;
      }
      console.log(i, flowerbed[i - 1], flowerbed[i]);
    }
  }
  return max >= n;
};
