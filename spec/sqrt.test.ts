import { sqrt } from "../src/ch3/sqrt.ts";
import { assertGreaterThanOrEqual } from "./assertions.ts";

Deno.test("test newthon's square root", () => {
  const xs: readonly number[] = [2, 25, 49, 81];
  const res = [1.4, 5, 7, 9];

  const sqrts = xs.map((x) => sqrt(() => x));

  sqrts.forEach((n, i) => assertGreaterThanOrEqual(n, res[i]));
});
