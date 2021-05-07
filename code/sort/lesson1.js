export default (arr) => {
  const r = [];
  // 记录奇数, 偶数位的下标
  let odd = 1;
  let even = 0;
  // 数组遍历
  arr.forEach((item) => {
    if (item % 2 === 1) {
      // 放奇数的坑
      r[odd] = item;
      odd += 2;
    } else {
      // 放偶数的坑
      r[even] = item;
      even += 2;
    }
  });
  return r;
};
// (arr) => {
// 降序排序
// arr.sort((a, b) => a - b);
// // 储存奇偶排序后的数组
// const r = [];
// // 记录奇数, 偶数位的下标
// let odd = 1;
// let even = 0;
// // 数组遍历
// arr.forEach((item) => {
//   if (item % 2 === 1) {
//     r[odd] = item;
//     odd += 2;
//   } else {
//     r[even] = item;
//     even += 2;
//   }
// });
// return r;
//   };
