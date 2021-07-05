import Tree, { Node } from "../../code/btree/lesson2";
test("tree1", () => {
  const root = new Tree([2, 1, 3]);
  expect(Tree.walk(root)).toBe(true);
});
test("tree2", () => {
  const root = new Node(2);
  root.left = new Node(3);
  root.right = new Node(1);
  expect(Tree.walk(root)).toBe(false);
});
test("tree3", () => {
  const root = new Tree([0, -1]);
  expect(Tree.walk(root)).toBe(true);
});
// TODO 这个有问题
// test("tree4", () => {
//   const root = new Tree([5, 4, 6, null, null, 3, 7]);
//   console.log('root', root);
//   expect(Tree.walk(root)).toBe(false);
// });
