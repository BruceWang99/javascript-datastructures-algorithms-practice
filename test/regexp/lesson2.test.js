import regModeStr from "../../code/regexp/lesson2";
// test("regModeStr", () => {
//   expect(regModeStr("aaa", "caa*")).toBe(false);
// });
// test("regModeStr:2", () => {
//   expect(regModeStr("aaabc", "a*bc")).toBe(true);
// });
// test("regModeStr:3", () => {
//   expect(regModeStr("aaabc", "a*.*")).toBe(true);
// });
test("regModeStr:4", () => {
  expect(regModeStr("mississippi", "mis*is*ip*.")).toBe(true);
});
test("regModeStr:5", () => {
  expect(regModeStr("ab", ".*c")).toBe(true);
});
