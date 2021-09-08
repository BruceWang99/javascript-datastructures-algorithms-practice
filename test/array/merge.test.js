import merge from "../../code/array/merge";
test("merge:1", () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
});
test("merge:2", () => {
  expect(merge([1], 1, [], 0)).toEqual([1]);
});
test("merge:3", () => {
  expect(merge([0], 0, [1], 1)).toEqual([1]);
});
test("merge:4", () => {
  expect(merge([0], 0, [1], 1)).toEqual([1]);
});
test("merge:5", () => {
  expect(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
});
