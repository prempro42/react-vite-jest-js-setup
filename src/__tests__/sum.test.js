import "@testing-library/jest-dom";
import sum from "../sum";

test("sum test", () => {
  expect(sum(5, 3)).toBe(8);
});
