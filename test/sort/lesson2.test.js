import sort from "../../code/sort/lesson2.js";

test("数组中的第K个最大元素", () => {
  expect(sort([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
});
