import Ugly from "../../code/heap/lesson2";
// test("Ugly1", () => {
//   expect(Ugly.getPrimes(6)).toEqual([2, 3]);
//   expect(Ugly.getPrimes(4)).toEqual([2]);
//   expect(Ugly.getPrimes(180)).toEqual([2, 3, 5]);
// });
// test("Ugly2", () => {
//   const ugly = new Ugly(12, [2, 7, 13, 19]);
//   expect(ugly.getAll()).toBe(32);
// });
test("Ugly3", () => {
  const ugly = new Ugly(800, [37, 43, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 113, 127, 131, 157, 163, 167, 173, 179, 191, 193, 197, 199, 211, 229, 233, 239, 251, 257]);
  expect(ugly.getAll()).toBe(32);
});
