import cheap from "../../code/dp/lesson2";
test("0,2,1", () => {
  expect(cheap(0, 2, 1)).toBe(200);
});
test("0,2,0", () => {
  expect(cheap(0, 2, 0)).toBe(500);
});
