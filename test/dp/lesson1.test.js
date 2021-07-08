import dp from "../../code/dp/lesson1";
test("dp:1", () => {
  const arr = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
  expect(dp(arr, 3, 3)).toBe(2);
});
test("dp:2", () => {
  const arr = [[0, 1], [0, 0]];
  expect(dp(arr, 2, 2)).toBe(1);
});
test("dp:3", () => {
  const arr = [[1, 0], [0, 0]];
  expect(dp(arr, 2, 2)).toBe(0);
});
// TODO [[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]]这个通不过
