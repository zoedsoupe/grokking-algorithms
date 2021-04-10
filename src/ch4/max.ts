// MAX NUMBER ON ARRAY
import { LazyT, List } from "../utils.ts";

export function maxA(arr: ReadonlyArray<number>): LazyT<number> {
  // base case : dot not need to calculate
  return () =>
    arr.length < 2
      ? head(arr) // base case to stop recursion
      : max(arr.slice(1)) > arr[0]
      ? // recursive case
        max(arr.slice(1))
      : arr[0];
}

export function maxL(xs: ListT<number>): LazyT<number> {
  const pair = xs();

  if (pair === null) return () => NaN;

  return max(pair.tail);
}
