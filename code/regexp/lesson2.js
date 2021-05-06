/*
 * 1. 看懂题目
 * 实现一个正则表达式的规则
 * (1)'.' 匹配任意单个字符
 * (2)'*' 匹配零个或多个前面的元素
 * (3) 这个规则匹配整个字符串, 而不是部分字符串, 可以理解为正则语法中的 g
 * (4)有两个放宽的条件: 1、s 可能为空，且只包含从 a-z 的小写字母。2、p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 2. 分析，推导解法
 * (1)匹配拆分为3种,1、无模式, 匹配纯字符串 2、[a-z]*, a-z零个或多个匹配 3、.*, 任意字符零个或多个匹配
 * (2)与输入字符串字符对比
 * (3)完全匹配就返回true
 * 3. 将思路转换为代码
 * 对模式变量进行正则筛选的表法式为: /([a-z.]\*)|([a-z]+(?=([a-z.]\*|$)))/g
 */
// TODO: 这个逻辑有问题
export default (str, mode) => {
  // 对模式变量进行正则筛选
  let modeArr = mode.match(/(\.(?!\*))|([a-z.]\*)|([a-z]+(?=([a-z.]\*|$|\.)))/g);
  const modeArr2 = [];
  for (let k = 0, mLen = modeArr.length; k < mLen; k += 2) {
    modeArr2.push(modeArr[k]);
    if (modeArr[k + 1] && modeArr[k].indexOf(modeArr[k + 1]) < 0) {
      modeArr2.push(modeArr[k + 1]);
    }
  }
  modeArr = modeArr2;
  let cur = 0;
  const strLen = str.length;
  if (modeArr.length > strLen) return false;
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    // 对于模式分为三类, .*|a*|cdef
    m = modeArr[i].split("");
    // 如果第二位是* 表示是有模式符号 *
    if (m[1] === "*") {
      if (m[0] === ".") {
        // 如果第一位是. 表示是有模式符号 ., 即匹配.*
        cur = strLen;
      } else {
        // 即匹配[a-z]*
        while (str[cur] === m[0]) {
          cur++;
        }
      }
    } else if (m[0] === ".") {
      cur++;
    } else {
      // 匹配纯字符串
      for (let j = 0, jl = m.length; j < jl; j++) {
        if (m[j] !== str[cur]) {
          return false;
        } else {
          cur++;
        }
      }
    }
  }
  return cur === strLen;
};
