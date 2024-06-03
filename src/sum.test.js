import { sum } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 10 + 20 to equal 30", () => {
  expect(sum(10, 20)).toBe(30);
});

test("demo array comparisons", () => {
  const arr1 = [10, 20, 30];
  const arr2 = [10, 20, 30];

  expect(arr1).toEqual(arr2);
});

test("demo object comparisons", () => {
  const obj1 = { speed: 10, colour: "yellow" };
  const obj2 = { speed: 10, colour: "yellow" };

  expect(obj1).toEqual(obj2);
});
