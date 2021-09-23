import isAnagram from "../../code/string/isAnagram";
test("isAnagram:1", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});
test("isAnagram:2", () => {
  expect(isAnagram("rat", "car")).toBe(false);
});
test("isAnagram:3", () => {
  expect(isAnagram("a", "a")).toBe(true);
});
