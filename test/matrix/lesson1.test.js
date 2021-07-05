import matrix from "../../code/matrix/lesson1";
// test("matrix1", () => {
//   const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//   expect(matrix(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
// });
// test("matrix2", () => {
//   const input = [[7], [9], [6]];
//   expect(matrix(input)).toEqual([7, 9, 6]);
// });
test("matrix3", () => {
  const input = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]];
  expect(matrix(input)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
