import findSubstring from "../../code/recur/lesson2";
test("words", () => {
  expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
});
test("words2", () => {
  expect(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])).toEqual([]);
});
test("words3", () => {
  expect(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])).toEqual([6, 9, 12]);
});
test("words4", () => {
  expect(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])).toEqual([8]);
});
test("words5", () => {
  expect(findSubstring("foobarfoobar", ["foo", "bar"])).toEqual([0, 3, 6]);
});
