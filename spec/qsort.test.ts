import { quickSort } from "../src/ch4/qsort.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("quicksort function", () => {
  const arrs: readonly number[][] = [
    [5, 4, 3, 2, 1],
    [2, 1],
    [],
    [6, 1, 9, 2, 5, 3],
  ];
  const res = [[1, 2, 3, 4, 5], [1, 2], [], [1, 2, 3, 5, 6, 9]];

  const sorteds = arrs.map((arr) => quickSort(arr));

  sorteds.forEach((s, i) => assertStrictEquals(s, res[i]));
});
