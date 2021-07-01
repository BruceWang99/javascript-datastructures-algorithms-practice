import leastInterval from "../../code/queue/lesson2";
test("leastInterval", () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
});
test("leastInterval2", () => {
  expect(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)).toBe(16);
});
test("leastInterval3", () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 0)).toBe(6);
});
test("leastInterval4", () => {
  expect(leastInterval(["A", "A", "B", "B", "C", "C", "D", "D"], 2)).toBe(8);
});
