// QUICKSORT
import { LazyT } from "../utils.ts";

// calculates all number lesser than given a number
function lesser(arr: ReadonlyArray<number>, n: LazyT<number>): LazyT<boolean> {
  return () => arr.filter((el) => el < n());
}

// filter all numbers that're gretaer than a number on an array
function greater(arr: ReadonlyArray<number>, n: LazyT<number>): LazyT<boolean> {
  return () => arr.filter((el) => el > n());
}

export function quickSort(
  arr: ReadonlyArray<number>,
): ReadonlyArray<number> {
  const p = arr[0];

  // base case
  // dont need to call itself again
  // or don't even need to call recursion
  arr.length < 2 ? arr : // calls it self twice
  // with lesser and greater values given a pivot
  // always divinding and conquering
  // and return this array
    [...quickSort(lesser(arr, p))(), p, ...quickSort(greater(arr, p)())];
}
