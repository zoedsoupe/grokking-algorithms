// QUICKSORT
import { head } from '../utils/utils';

const lesser = (arr: ReadonlyArray<number>, n: number) =>
  arr.filter((el) => el < n);

const greater = (arr: ReadonlyArray<number>, n: number) =>
  arr.filter((el) => el > n);

export const quickSort = (
  arr: ReadonlyArray<number>,
  p = head(arr)
): ReadonlyArray<number> =>
  arr.length < 2
    ? arr
    : [...quickSort(lesser(arr, p)), p, ...quickSort(greater(arr, p))];
