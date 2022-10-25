const { sum } = require("./sum");

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 10 + 20 to equal 30", () => {
  expect(sum(10, 20)).toBe(30);
});
