import ip from "../../code/recur/lesson1";
test("ip", () => {
  expect(ip("010010")).toEqual(["0.10.0.10", "0.100.1.0"]);
});
