import setZeroes from "../../code/array/setZeroes";
test("setZeroes:1", () => {
  expect(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
});
test("setZeroes:2", () => {
  expect(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});