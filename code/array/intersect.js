// 给定两个数组，编写一个函数来计算它们的交集。
function intersect(nums1, nums2) {
  // 思路1
  // 1.nums1的每一项和nums2的每一项对比, 把相等的返回出来
  // 2.记录每一个元素的个数
  // 3.输出结果的时候, 对比每一个元素的个数, 取元素个数小的,push到结果中
  const result_set = new Set();
  const map1 = new Map();
  const map2 = new Map();
  nums1.forEach((num1, index1) => {
    const val1 = map1.get(num1);
    map1.set(num1, val1 ? val1 + 1 : 1);
    nums2.forEach((num2) => {
      const val2 = map2.get(num2);
      if (index1 === 0) {
        map2.set(num2, val2 ? val2 + 1 : 1);
      }
      if (num1 === num2) {
        result_set.add(num1);
      }
    });
  });
  const result = [];
  result_set.forEach((value) => {
    let count = Math.min(map1.get(value), map2.get(value));
    while (count > 0) {
      result.push(value);
      --count;
    }
  });
  return result;
}
export default intersect;
