// FACTORIAL
import { LazyT } from "../utils.ts";

// given a number
// calculates the factorial
// with an accumulator
export function factorial(n: LazyT<number>): LazyT<number> {
  return doFactorial(n, () => 1);
}

function doFactorial(n: LazyT<number>, a: LazyT<number>): LazyT<number> {
  if (n() < 2) return 1;

  return doFactorial(
    () => n() - 1,
    () => acc() * n()
  );
}
