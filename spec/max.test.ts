import { maxA, maxL } from "../src/ch4/max.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("maxA function", () => {
  const xss: readonly number[][] = [
    [1, 4, 5, 6, 1, 10],
    [6, 234, 1, 4, 345, 7],
    [5],
    [7, 3, 5, 6],
  ];
  const res = [10, 345, 5, 7];

  const maxs = xss.map((xs) => maxA(xs));

  maxs.forEach((m, i) => assertStrictEquals(m(), res[i]));
});

Deno.test("maxL function", () => {
  const xs = toList([1, 4, 5, 6, 1, 10]);
  const ys = toList([6, 234, 1, 4, 345, 7]);
  const ws = toList([5]);
  const zs = toList([7, 3, 5, 6]);

  assertStrictEquals(maxL(xs), 10);
  assertStrictEquals(maxL(ys), 345);
  assertStrictEquals(maxL(ws), 5);
  assertStrictEquals(maxL(zs), 7);
});
