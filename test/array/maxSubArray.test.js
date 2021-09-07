import maxSubArray from "../../code/array/maxSubArray";
test("maxSubArray:[-2, 1, -3, 4, -1, 2, 1, -5, 4]", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
});
test("maxSubArray:[1]", () => {
  expect(maxSubArray([1])).toEqual(1);
});
test("maxSubArray:[0]", () => {
  expect(maxSubArray([0])).toEqual(0);
});
test("maxSubArray:[-1]", () => {
  expect(maxSubArray([-1])).toEqual(-1);
});
test("maxSubArray:[-100000]", () => {
  expect(maxSubArray([-100000])).toEqual(-100000);
});
