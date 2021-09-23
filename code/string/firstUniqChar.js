
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

function firstUniqChar(s) {
  // 思路1, 从前往后, 从第一个字符开始, 和后面所有的字符比较, 如果没有相同的,返回该索引
//   let result = -1;
//   const len = s.length;
//   const tmp = [];
//   for (let i = 0; i < len; i++) {
//     let flag = true;
//     if (tmp.indexOf(s[i]) > -1) {
//       continue;
//     }
//     for (let j = i + 1; j < len; j++) {
//       if (s[i] === s[j]) {
//         tmp.push(s[j]);
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       result = i;
//       break;
//     }
//   }
//   return result;
  // 思路2 记录每个字符的个数, 找第一个最小的index
  // const map = new Map();
  // const map2 = new Map();
  // for (let i = 0, len = s.length; i < len; i++) {
  //   let min = 1;
  //   const mapitem = map.get(s[i]);
  //   if (mapitem) {
  //     min = mapitem + 1;
  //     map2.delete(s[i]);
  //   } else {
  //     map2.set(s[i], i);
  //   }
  //   map.set(s[i], min);
  // }
  // return map2.size > 0 ? [...map2.values()][0] : -1;
  // 学习到的思路3, 使用Unit16Array的数组索引和字符串Unicode码(小写字母的unicode码是97-122)之间的关联, 来计算存储每个字符串的个数, 然后找到第一个不重复的字符(数量为1的字符串)
  // const arr = new Uint16Array(26);
  // let i = s.length;
  // while (i--) {
  //   arr[s.charCodeAt(i) - 97]++;
  // }
  // while (i++ < s.length) {
  //   if (arr[s.charCodeAt(i) - 97] === 1) return i;
  // }
  // return -1;
  // 学习到的思路4, 用object存储每个字符串的个数, 然后找一个不重复的字符(数量为1的字符串)
  // const obj = Object.create(null);
  // let i = s.length;
  // while (i--) {
  //   obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
  // }
  // while (i++ < s.length) {
  //   if (obj[s[i]] === 1) return i;
  // }
  // return -1;
  // 学习到的思路5, 用map存储每个字符串
  // const map = new Map();
  // let i = s.length;
  // while (i--) {
  //   map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  // }
  // while (i++ < s.length) {
  //   if (map.get(s[i]) === 1) return i;
  // }
  // return -1;
  // 学习到的思路6, 利用js的两个方法, indexOf和lastIndexOf, 如果indexOf和lastIndexOf的索引相同, 说明这个字符只出现了一次, 我们只要从第一个字符串去遍历就能得到结果
  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  // }
  // return -1;
  // 学习到的思路7, 从第一个字符开始,遍历字符串, 当 i和s.lastIndexOf的值相等的时候, 就是第一个唯一字符, 使用Set(集合)跳过已经出现的字符串
  // let i = -1;
  // const set = new Set();
  // while (++i < s.length) {
  //   if (!set.has(s[i])) { // 只有第一次出现,才会去判定
  //     set.add(s[i]);
  //     if (s.lastIndexOf(s[i]) === i) return i;
  //   }
  // }
  // return -1;
  // 学习到的思路8, 从第一个字符开始,遍历字符串, 在当前字符串第一次出现的情况下, 如果s.indexOf从i+1开始检索, 索引为-1时, 就是第一个唯一字符
  // let i = -1;
  // const set = new Set();
  // while (++i < s.length) {
  //   if (!set.has(s[i])) { // 只有第一次出现,才会去判定
  //     set.add(s[i]);
  //     if (s.indexOf(s[i], i + 1) === -1) return i;
  //   }
  // }
  // return -1;
  // 学习到的思路9, 用string的search方法, 找寻索引
  // let i = -1;
  // const set = new Set();
  // while (++i < s.length) {
  //   if (!set.has(s[i])) { // 只有第一次出现,才会去判定
  //     set.add(s[i]);
  //     if (s.search(new RegExp(`\\w{${i + 1},}${s[i]}`)) === -1) return i;
  //   }
  // }
  // return -1;
  // 学习到的思路10, 用string的match方法, 找寻索引
  // let i = -1;
  // const set = new Set();
  // while (++i < s.length) {
  //   if (!set.has(s[i])) { // 只有第一次出现,才会去判定
  //     set.add(s[i]);
  //     if (s.match(new RegExp(`\\w{${i + 1},}${s[i]}`)) === null) return i;
  //   }
  // }
  // return -1;
  // 学习到的思路11, 使用string的replace方法
  // let i = -1;
  // while (++i < s.length) {
  //   if (s[i] !== '0') { // 只有第一次出现,才会去判定
  //     if (s.indexOf(s[i], i + 1) === -1) return i;
  //     s = s.replace(new RegExp(s[i], 'g'), (v, j) => j > i ? '0' : v); // 把i后面的相同字符全部变成‘0’
  //   }
  // }
  // return -1;
  // 学习到的思路12, 使用排序,让相同字符排在一起, 用正则/(\w)\1+/g 去除重复的, 剩下的是只有一个字符的, 再找最小的索引
  // const _s = s.split('').sort().join('').replace(/(\w)\1+/g, ''); // 排序,去除重复
  // let i = -1;
  // let min = Infinity; // 无穷大
  // while (++i < _s.length) {
  //   min = Math.min(s.indexOf(_s[i]), min); // 取最小值
  // }
  // return _s.length > 0 ? min : -1;
  // 学习到的思路13, 牛逼的贪心算法, 遍历26个字母, 找到s中唯一的字符(lastIndexOf=indexOf), 并且只找最小的索引
  let i = 96;
  let min = Infinity; // 无穷大
  while (++i < 97 + 26) {
    const str = String.fromCharCode(i);
    const fsi = s.indexOf(str);
    // s中有这个字符,并且是唯一字符,还比最小的小, 这时候, 替换最小值
    if (fsi > -1 && fsi === s.lastIndexOf(str) && fsi < min) min = fsi;
  }
  return min === Infinity ? -1 : min;
}
export default firstUniqChar;
