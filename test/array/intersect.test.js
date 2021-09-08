import intersect from "../../code/array/intersect";
test("intersect:1", () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
});
test("intersect:2", () => {
  expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
});
