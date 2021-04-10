import { binarySearch } from "../src/ch1/bs.ts";
import { quickSort } from "../src/ch4/qsort.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("Test Binary Search algorithm", () => {
  const xs: ReadonlyArray<number> = [1, 5, 3, 6, 7, 10, 56, 23, 45, 2];

  const ys = [...xs].sort();

  const index = binarySearch(ys, () => 6);

  assertStrictEquals(index(), 4);
});
