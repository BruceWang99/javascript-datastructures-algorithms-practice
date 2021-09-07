import twoSum from "../../code/array/twoSum";
test("twoSum:[2, 7, 11, 15], 9", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test("twoSum:[3,2,4], 6", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});
test("twoSum:[3,3], 6", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
