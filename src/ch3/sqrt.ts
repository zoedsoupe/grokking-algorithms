// SQUARE ROOT
import { Lazy, LazyT } from "../utils.ts";

// implements newthon's algorithm:
// √a == y | y² == a
export function sqrt(n: LazyT<number>): LazyT<number> {
  const a = () => n() / 2;
  const margin = () => 0.000001;

  return doSqrt(n, a, margin);
}

function doSqrt(
  n: LazyT<number>,
  aprox: LazyT<number>,
  margin: LazyT<number>,
): LazyT<number> {
  const avg = Lazy.avg(aprox, () => n() / aprox());

  if (Math.abs(aprox() - avg()) < margin()) return avg;

  return doSqrt(n, avg, margin);
}
