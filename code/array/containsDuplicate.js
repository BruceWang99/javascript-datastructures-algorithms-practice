// 给定一个整数数组，判断是否存在重复元素。
// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
function containsDuplicate(nums) {
  // 方法1
  //   const map = new Map();
  //   let result = false;
  //   for (const num of nums) {
  //     if (map.has(num)) {
  //       result = true;
  //       break;
  //     } else {
  //       map.set(num, 1);
  //     }
  //   }
  //   return result;
  // 方法2
  let result = false;
  for (var i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result = true;
        break;
      }
    }
    if (result) break;
  }
  return result;
}
export default containsDuplicate;

console.log(containsDuplicate([1, 2, 3, 1]));
