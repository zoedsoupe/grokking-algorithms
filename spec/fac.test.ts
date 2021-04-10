import { factorial } from "../src/ch3/fac.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("test factorial function", () => {
  const xs: readonly number[] = [5, 4, 3, 1, 0];
  const results = [120, 24, 6, 1, 1];

  const ns = xs.map((x) => factorial(() => x));

  ns.forEach((n, i) => assertStrictEquals(n(), results[i]));
});
