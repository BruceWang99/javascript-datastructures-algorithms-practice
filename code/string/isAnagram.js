// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意: 若s和t中每个字符出现的次数都相同，则称s和t互为字母异位词。
// s和t相互都可以组成对方
function isAnagram(s, t) {
  // 思路一, 首先判断s,t的长度, 长度不等, 直接返回false. 新建两个map 存储字符的个数, 然后对比所以字符的个数是否相等
  // const sl = s.length; const tl = t.length;
  // if (sl !== tl) {
  //   return false;
  // }
  // const sMap = new Map();
  // const tMap = new Map();
  // for (let i = 0; i < sl; i++) {
  //   if (sMap.has(s[i])) {
  //     sMap.set(s[i], sMap.get(s[i]) + 1);
  //   } else {
  //     sMap.set(s[i], 1);
  //   }
  //   if (tMap.has(t[i])) {
  //     tMap.set(t[i], tMap.get(t[i]) + 1);
  //   } else {
  //     tMap.set(t[i], 1);
  //   }
  // }
  // for (const key of sMap.keys()) {
  //   if (sMap.get(key) !== tMap.get(key)) {
  //     return false;
  //   }
  // }
  // return true;
  // 学习到的思路2, 用数组代替map, 优化空间
  const arr = new Int16Array(26);
  if (s.length !== t.length) return false;
  let i = s.length;
  while (--i >= 0) {
    arr[s.charCodeAt(i) - 97]++;
  }
  while (i++ < t.length) {
    const index = t.charCodeAt(i) - 97;
    arr[index]--;
    if (arr[index] < 0) return false;
  }
  return true;
}
export default isAnagram;
