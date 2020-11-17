export default function test(s) {
  // 建立数据结构、栈, 保存数据
  const r = [];
  // 给定任意字串, 返回第一个条件的字串
  const match = (s) => {
    const j = s.match(/^(0+|1+)/)[0];
    const q = (j[0] ^ 1).toString().repeat(j.length);
    const str = `${j}${q}`;
    if (s.slice(0, str.length).indexOf(str) > -1) {
      return `${j}${q}`;
    }
    return "";
  };
  // 通过for控制程序运行的流程
  for (let i = 0, len = s.length - 1; i < len; i++) {
    const sub = match(s.slice(i)); // 截取从i位到最后一位, 去匹配符合条件的子串
    if (sub) {
      r.push(sub);
    }
  }
  return r.length;
}
