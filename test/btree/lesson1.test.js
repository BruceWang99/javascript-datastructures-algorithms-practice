import Tree from "../../code/btree/lesson1";
test("tree1", () => {
  const root = new Tree([1, 2, 2, 3, 4, 4, 3]);
  expect(Tree.isSymmetry(root)).toBe(true);
});
test("tree2", () => {
  const root = new Tree([1, 2, 2, 3, 4, 5, 3]);
  expect(Tree.isSymmetry(root)).toBe(false);
});
test("tree3", () => {
  const root = new Tree([1, 2, 2, null, 3, null, 3]);
  expect(Tree.isSymmetry(root)).toBe(false);
});
