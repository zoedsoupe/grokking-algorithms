// SUM
import { LazyT, List, ListT } from "../utils.ts";

export function sumA(arr: ReadonlyArray<number>): number {
  return doSumA(arr, () => 0);
}

function doSumA(arr: ReadonlyArray<number>, acc: LazyT<number>): LazyT<number> {
  if (arr.length === 1) return acc();

  return sum(arr.slice(1), () => acc() + arr[0]);
}

export function sumL(xs: ListT<number>): LazyT<number> {
  return doSumL(xs, () => 0);
}

function doSumL(xs: ListT<number>, acc: LazyT<number>): LazyT<number> {
  const pair = xs();

  if (pair === null) return () => 0;

  return sum(pair.tail, () => acc() + pair.head());
}
