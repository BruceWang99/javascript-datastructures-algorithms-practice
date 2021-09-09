import matrixReshape from "../../code/array/matrixReshape";
test("matrixReshape:1", () => {
  expect(matrixReshape([[1, 2], [3, 4]], 1, 4)).toEqual([[1, 2, 3, 4]]);
});
test("matrixReshape:2", () => {
  expect(matrixReshape([[1, 2], [3, 4]], 2, 4)).toEqual([[1, 2], [3, 4]]);
});
test("matrixReshape:3", () => {
  expect(matrixReshape([[1, 2]], 1, 1)).toEqual([[1, 2]]);
});
test("matrixReshape:4", () => {
  expect(matrixReshape([[2, 5, 8], [4, 0, -1]], 1, 6)).toEqual([[2, 5, 8, 4, 0, -1]]);
});
