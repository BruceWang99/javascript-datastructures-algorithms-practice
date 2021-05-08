import sort from "../../code/sort/lesson3.js";

test("最大间距:1", () => {
  expect(sort([3, 6, 9, 1])).toBe(3);
});
test("最大间距:2", () => {
  expect(sort([10])).toBe(0);
});
