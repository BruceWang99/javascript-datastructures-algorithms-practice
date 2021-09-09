import yanghuiTriangle from "../../code/array/yanghuiTriangle";

test("yanghuiTriangle:1", () => {
  expect(yanghuiTriangle(1)).toEqual([[1]]);
});
test("yanghuiTriangle:2", () => {
  expect(yanghuiTriangle(2)).toEqual([[1], [1, 1]]);
});
test("yanghuiTriangle:3", () => {
  expect(yanghuiTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
});
test("yanghuiTriangle:4", () => {
  expect(yanghuiTriangle(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
});
test("yanghuiTriangle:5", () => {
  expect(yanghuiTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
});
