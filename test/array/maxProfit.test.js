import maxProfit from "../../code/array/maxProfit";
test("maxProfit:1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
});
test("maxProfit:2", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});
test("maxProfit:3", () => {
  expect(maxProfit([2, 4, 1])).toEqual(2);
});
