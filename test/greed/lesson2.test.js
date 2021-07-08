import change from "../../code/greed/lesson2";
test("change:1", () => {
  expect(change([5, 5, 10, 10, 20])).toBe(false);
});
