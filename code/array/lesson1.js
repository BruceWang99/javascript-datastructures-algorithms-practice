export default function (digits) {
  // 建立电话号码键盘映射
  const map = new Map([
    ["1", 1],
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  //  把输入的字符串字符分割成数组
  const num = digits.split("");
  const code = [];
  // 把输入的数字,转成对应的字母中,并存到code中
  num.forEach(function (item) {
    const str = map.get(item);
    if (str) {
      code.push(str);
    }
  });
  const comb = function (arr) {
    // length为0时, 直接返回code
    if (arr.length === 0) {
      return arr;
    }
    // length为1时, 直接返回当前字符的数组
    if (arr.length === 1) {
      return arr[0].split("");
    }
    // 临时变量用来保存前两个组合的结果
    const tmp = [];
    // 两层循环找出两个数组能出现的所有随机字母组合
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    // 将tmp替换掉数组的前两项
    arr.splice(0, 2, tmp);
    // 当数组长度大于1时, 递归调用这个方法
    if (arr.length > 1) {
      comb(arr);
    }
    // 最后剩下一项数组, 返回出来
    return arr[0];
  };
  return comb(code);
}
