import { equal } from "assert";
import factorial from "./factorial";

it("should return 1", () => {
  equal(factorial(0), 1);
});

it("should return 3628800", () => {
  equal(factorial(10), 3628800);
});

it("Non integer returns NaN", () => {
  equal(isNaN(factorial("25")), true);
});

it("Negative number returns NaN", () => {
  equal(isNaN(factorial(-6)), true);
});

it("Number above 69 returns NaN", () => {
  equal(isNaN(factorial(71)), true);
});
