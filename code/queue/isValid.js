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
  while (s) {
    if (s.match(/\(\)|\{\}|\[\]/g)) {
      s = s.replace(/\(\)|\{\}|\[\]/g, '');
    } else {
      break;
    }
  }
  return !s;
};
export default isValid;
