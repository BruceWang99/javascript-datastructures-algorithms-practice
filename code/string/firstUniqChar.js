
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
  const map = new Map();
  const map2 = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    let min = 1;
    const mapitem = map.get(s[i]);
    if (mapitem) {
      min = mapitem + 1;
      map2.delete(s[i]);
    } else {
      map2.set(s[i], i);
    }
    map.set(s[i], min);
  }
  return map2.size > 0 ? [...map2.values()][0] : -1;
}
export default firstUniqChar;
