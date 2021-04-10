// QUICKSORT
import { head } from "../utils/utils";

// calculates all number lesser than given a number
const lesser = (arr: ReadonlyArray<number>, n: number) =>
  arr.filter((el) => el < n);

// filter all numbers that're gretaer than a number on an array
const greater = (arr: ReadonlyArray<number>, n: number) =>
  arr.filter((el) => el > n);

export const quickSort = (
  arr: ReadonlyArray<number>,
  p = head(arr),
): ReadonlyArray<number> =>
  // base case
  // dont need to call itself again
  // or don't even need to call recursion
  arr.length < 2 ? arr : // calls it self twice
  // with lesser and greater values given a pivot
  // always divinding and conquering
  // and return this array
    [...quickSort(lesser(arr, p)), p, ...quickSort(greater(arr, p))];
