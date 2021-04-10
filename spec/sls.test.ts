import { selectionSort } from "../src/ch2/sls.ts";
import {
  assert,
  assertStrictEquals,
} from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("test selection sort algorithm", () => {
  const xs: ReadonlyArray<number> = [5, 4, 9, 10, 23, 1, 0, 2];
  const sorted: ReadonlyArray<number> = [0, 1, 2, 4, 5, 9, 10];

  const ys = selectionSort(xs);
  assert(ys);
  assertStrictEquals(ys, sorted);
});
