import rect from "../../code/stack/lesson2";
test("rect: 1", () => {
  const matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];
  expect(rect(matrix)).toBe(6);
});
