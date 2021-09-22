
// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。
// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
// 求ransom的每个字符在magazine中,都有对应的字符

function firstUniqChar(ransomNote, magazine) {
  // 思路1 遍历赎金信里所有的字, 每一个字, 都与杂志里的字比较,如果有这个字, 删除杂志里的那个字, 进行下一次遍历,如果没有的话,直接返回false
  for (let i = 0; i < ransomNote.length; i++) {
    const len1 = magazine.length;
    let flag = false;
    let mz = '';
    for (let j = 0; j < len1; j++) {
      if (ransomNote[i] === magazine[j] && flag === false) {
        flag = true;
      } else {
        mz += magazine[j];
      }
    }
    if (!flag) {
      return false;
    } else {
      magazine = mz;
    }
  }
  return true;
}
export default firstUniqChar;
