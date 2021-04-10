// SQUARE ROOT
import { Lazy, LazyT } from "../utils.ts";

// implements newthon's algorithm:
// √a == y | y² == a
export function sqrt(n: LazyT<number>): LazyT<number> {
  const a = () => n() / 2;
  const margin = () => 0.000001;

  return () =>
    Math.abs(a() - avg(a(), n() / a())) < margin()
      ? avg(a(), n() / a())
      : sqrt(n, avg(a, n / a));
}
