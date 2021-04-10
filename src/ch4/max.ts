// MAX NUMBER ON ARRAY
import { LazyT, ListT } from "../utils.ts";

export function maxA(arr: ReadonlyArray<number>): LazyT<number> {
  if (arr.length < 1) return () => NaN;

  if (maxA(arr.slice(1))() < arr[0]) return () => arr[0];

  return maxA(arr.slice(1));
}

export function maxL(xs: ListT<number>): LazyT<number> {
  const pair = xs();

  if (pair === null) return () => NaN;

  return maxL(pair.tail);
}
