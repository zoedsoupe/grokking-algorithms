// COUNT ELEMENTS ON ARRAY
import { LazyT, ListT } from "../utils.ts";

export function countA(arr: ReadonlyArray<number>): LazyT<number> {
  return doCountA(arr, () => 0);
}

function doCountA(
  arr: ReadonlyArray<number>,
  acc: LazyT<number>,
): LazyT<number> {
  if (arr.length < 1) return acc;

  return doCountA(arr.slice(1), () => acc() + 1);
}

export function countL(xs: List<number>): LazyT<number> {
  return doCountL(xs, () => 0);
}

function doCountL(xs: ListT<number>, acc: LazyT<number>): LazyT<number> {
  const pair = xs();

  if (pair === null) return 0;

  return doCountL(pair.tail, () => acc() + 1);
}
