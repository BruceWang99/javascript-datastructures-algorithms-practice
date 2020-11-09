import cpu from "../../code/queue/lesson2";

test("cpu:1", () => {
  const tasks = ["A", "A", "A", "B", "B", "B"];
  const n = 2;
  expect(cpu(tasks, n)).toBe(8);
});
