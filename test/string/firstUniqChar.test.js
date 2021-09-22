import firstUniqChar from "../../code/string/firstUniqChar";
test("firstUniqChar:1", () => {
  expect(firstUniqChar("leetcode")).toBe(0);
});
test("firstUniqChar:2", () => {
  expect(firstUniqChar("loveleetcode")).toBe(2);
});
test("firstUniqChar:3", () => {
  expect(firstUniqChar("aabb")).toBe(-1);
});
