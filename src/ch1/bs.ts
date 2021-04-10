// BINARY SEARCH
import { LazyT } from "../utils.ts";

export function binarySearch(
  arr: ReadonlyArray<number>,
  item: LazyT<number>,
): LazyT<number> {
  doBinarySearch(arr, item, () => 0);
}

function doBinarySearch(
  arr: ReadonlyArray<number>,
  item: LazyT<number>,
  l: LazyT<number>,
): LazyT<number> {
  // base case, not found the item
  if (arr.length < 1) return NaN;

  // get middle of the list
  const mid = () => (arr.length / 2) | 0;

  // base case 2: found item
  if (arr[mid] === item) return () => l() + mid();

  // recursive case, sends a
  // specific half of the list
  return arr[mid()] > item
    ? doBinarySearch(arr.slice(0, mid()), item, l)
    : doBinarySearch(arr.slice(mid() + 1), item, () => mid() + l() + 1);
}
