export default (arr) => { // TODO 有许多输入的结果返回的输出是错的
  const result = [];
  const reg = /1{2,}/g;
  // 把二位数组重新表达, 把相邻的1提取出来
  arr = arr.map(item => {
    const str = item.join('');
    let r = reg.exec(str);
    const rs = [];
    while (r) {
      rs.push([r.index, r.index + r[0].length - 1]);
      r = reg.exec(str);
    }
    return rs;
  });
  // 通过递归计算相邻的矩阵
  const maxRect = (arr, result, n = 1) => {
    const top = arr.pop();
    const next = arr.pop();
    // 记录第一行的,每一个起始点和截止点
    let tt;
    // 记录第二行的,每一个起始点和截止点
    let nn;
    // 记录交叉的起始索引
    let start;
    // 记录交叉的截止索引
    let end;
    let width = 1;
    let maxWidth = 1;
    n++;
    for (let i = 0, il = top.length; i < il; i++) {
      tt = top[i];
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j];
        width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
        if (width > maxWidth) {
          maxWidth = width;
          start = Math.max(tt[0], nn[0]);
          end = Math.min(tt[1], nn[1]);
        }
      }
    }
    // 没有找到交叉点
    if (start === undefined || end === undefined) {
      if (n < 3) {
        return false;
      } else {
        width = top[0][1] - top[0][0] + 1;
        if (width > 1) {
          result.push((n - 1) * width);
        }
      }
    } else {
      arr.push([[start, end]]);
      maxRect(arr, result, n++);
    }
  };
  while (arr.length > 1) {
    maxRect([].concat(arr), result);
    arr.pop();
  }
  let max = 0;
  let item = result.pop();
  while (item) {
    if (item > max) {
      max = item;
    }
    item = result.pop();
  }
  return max > 0 ? max : -1;
};