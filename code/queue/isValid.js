// 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
// 思路1 正则 消消乐, 消除 () {} []这三种组合, 消除为空,一直循环消除, 直到消除为空字符串,就为true, 反之为false
//   while (s) {
//     if (s.match(/\(\)|\{\}|\[\]/g)) {
//       s = s.replace(/\(\)|\{\}|\[\]/g, '');
//     } else {
//       break;
//     }
//   }
//   return !s;
  // 思路2: 括号匹配是使用栈解决的经典问题。(后入先出)
//   if (s.length % 2 === 1) return false; // s为奇数时返回false
//   const sMap = {
//     "{": '}',
//     "(": ")",
//     "[": "]"
//   };
//   const stack = [];
//   for (const sub of s) {
//     if (sMap[sub]) {
//       stack.push(sub);
//     } else {
//       if (stack.length === 0 || sMap[stack.pop()] !== sub) return false; // 栈空或者出栈元素不等于当前元素时, false
//     }
//   }
//   return stack.length === 0;
  // 思路3: 思路2 节省空间复杂度
  if (s.length % 2 === 1) return false; // s为奇数时返回false
  const stack = [];
  for (const sub of s) {
    if (sub === "}") {
      if (stack.pop() !== "{") return false; // 栈空或者出栈元素不等于当前元素时, false
    } else if (sub === ")") {
      if (stack.pop() !== "(") return false;
    } else if (sub === "]") {
      if (stack.pop() !== "[") return false;
    } else {
      stack.push(sub);
    }
  }
  return stack.length === 0;
};
export default isValid;
