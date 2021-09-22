import canConstruct from "../../code/string/canConstruct";
test("canConstruct:1", () => {
  expect(canConstruct("a", "b")).toBe(false);
});
test("canConstruct:2", () => {
  expect(canConstruct("aa", "ab")).toBe(false);
});
test("canConstruct:3", () => {
  expect(canConstruct("aa", "aab")).toBe(true);
});
test("canConstruct:4", () => {
  expect(canConstruct("aab", "baa")).toBe(true);
});
