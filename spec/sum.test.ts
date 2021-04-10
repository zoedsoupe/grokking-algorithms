import { List } from "../src/utils.ts";
import { sumA, sumL } from "../src/ch4/sum.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("sumA function", () => {
  const arrs: readonly number[][] = [
    [1, 2, 3, 4],
    [5, 3, 1],
    [9, 8, 58],
  ];
  const expected = [10, 9, 75];

  const sums = arrs.map((arr) => sumA(arr));

  sums.forEach((s, i) => assertStrictEquals(s(), expected[i]));
});

Deno.test("sumL function", () => {
  const xs = List.toList([1, 2, 3, 4]);
  const ys = List.toList([5, 3, 1]);
  const ws = List.toList([9, 8, 58]);

  assertStrictEquals(sumL(xs)(), 10);
  assertStrictEquals(sumL(ys)(), 9);
  assertStrictEquals(sumL(ws)(), 75);
});
