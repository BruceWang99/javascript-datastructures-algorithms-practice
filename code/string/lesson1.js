// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
function func1(s) {
  return s
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
}
function func2(s) {
  const arr = s.match(/[^\s]+/g);
  if (!arr) return "";
  return arr.map((item) => item.split("").reverse().join("")).join(" ");
}

export default func2;
