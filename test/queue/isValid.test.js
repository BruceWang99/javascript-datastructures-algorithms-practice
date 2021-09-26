import isValid from "../../code/queue/isValid";
test("isValid1", () => {
  expect(isValid('()')).toBe(true);
});
test("isValid2", () => {
  expect(isValid('()[]{}')).toBe(true);
});
