// 剑指 Offer 43. 1～n 整数中 1 出现的次数
function countOnes (n) {
  let count = 0;
  function findOne(n) {
    // 短除法, 找出每一位是不是1
    while (n >= 10) {
      const c = Math.floor(n / 10);
      const y = n % 10;
      if (c >= 10) {
        if (y === 1) {
          count++;
        };
      } else {
        if (y === 1) {
          count++;
        }
      }
      n = c;
    }
    if (n === 1) {
      count++;
    }
  }
  // 遍历所有的值
  for (let i = 1; i <= n; i++) {
    findOne(i);
  }
  return count;
}
console.log(countOnes(13));
// function findOne(n) {
//   let count = 0;

//   // 短除法, 找出每一位是不是1
//   while (n >= 10) {
//     const c = Math.floor(n / 10);
//     const y = n % 10;
//     if (y === 1) {
//       count++;
//     };
//     n = c;
//   }
//   if (n === 1) {
//     count++;
//   }
//   return count;
// }
// console.log(findOne(824883294));
