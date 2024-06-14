import { filterFunction} from "./filter.js";
import { test, expect } from "@jest/globals";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("filter numbers less than 11", () => {
  const predicateFn = v => v < 11;
  expect(filterFunction([10, 50, -20, -10, 100], predicateFn)).toEqual([10, -20, -10]);
});

test("filter uppercase letters", () => {
  const predicateFn = ch => ch.toUpperCase() === ch;
  expect(filterFunction("AbcDeFgHI".split(""), predicateFn)).toEqual(["A", "D", "F", "H", "I"]);
});

test("filter negative numbers", () => {
  const predicateFn = v => v < 0;
  expect(filterFunction([10, 50, 20, 10, 100], predicateFn)).toEqual([ ]);
});

test("filter numbers", () => {
  const predicateFn = v => typeof(v) === "number";
  expect(filterFunction([10, "Dana"], predicateFn)).toEqual([10]);
});

test("filter nested arrays", () => {
  const predicateFn = v => Array.isArray(v);
  expect(filterFunction([10, [-10, 100], 50, []], predicateFn)).toEqual([[-10, 100], []]);
});

test("filter words by length", () => {
  const predicateFn = v => v.length <= 3;
  expect(filterFunction(["cat", "dog", "baby", "holiday"], predicateFn)).toEqual(["cat", "dog"]);
});
