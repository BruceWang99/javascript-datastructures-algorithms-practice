
export default (src, dst, k) => {
  // 对n个城市m个航班做飞行说明
  const flights = [
    [0, 1, 100],
    [1, 2, 100],
    [0, 2, 500]
  ];
  const cheap = (src, dst, k) => {
    // 找到所有直达dst的航班, item[0]就是dst的前一站
    const prev = flights.filter(item => item[1] === dst);
    const min = Math.min.apply(null, prev.map(item => {
      // 从dst往前找, 找到了起始城市, dst的上一站就是src, k也满足条件
      if (item[0] === src && k > -1) {
        return item[2];
      } else if (k === 0 && item[0] !== src) { // 如果k是0, 也就没有中转的时候, 起始站不等于出发城市,说明没找到
        return Number.MAX_SAFE_INTEGER; // 设置为无限大, 取最小值的时候,就过滤掉了
      } else {
        return item[2] + cheap(src, item[0], k - 1); // 现在的成本加上继续向上一个站去找 递归
      }
    }));
    return min;
  };
  return cheap(src, dst, k) || -1;
};
// TODO 不是所有的测试用例都能通过
