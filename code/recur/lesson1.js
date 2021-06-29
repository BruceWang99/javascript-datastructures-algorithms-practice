export default (str) => {
  // 保存所有符合条件的IP
  const r = [];
  // 递归函数
  const search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === str) { // 四部分+str分配完成,符合条件
      r.push(cur.join('.'));
    } else {
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) { // 循环四次, 拆成四部分
        tmp = sub.substr(0, i + 1);
        if (tmp < 256 && !/^0[0-9]+/.test(tmp.toString())) { // 符合条件的数值
          search(cur.concat([tmp]), sub.substr(i + 1));
        }
      }
    }
  };
  if (str.length > 12) return r; // 长度边界
  search([], str);
  return r;
};
