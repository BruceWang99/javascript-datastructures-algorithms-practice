import Heap from "../../code/heap/lesson1";
test("Heap1", () => {
  const heap = new Heap('chcaa');
  expect(heap.toString()).toMatch(/ccaah|aacch/);
});
