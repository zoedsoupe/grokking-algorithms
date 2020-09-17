import { sort } from '../utils/utils';

// BINARY SEARCH
const binarySearch = (
  arr: ReadonlyArray<number>,
  item: number,
  l = 0
): number => {
  if (arr.length < 1) return -1;

  const mid = (arr.length / 2) | 0;

  if (arr[mid] === item) return l + mid;

  return arr[mid] > item
    ? binarySearch(arr.slice(0, mid), item, l)
    : binarySearch(arr.slice(mid + 1), item, mid + l + 1);
};

const arr: ReadonlyArray<number> = [1, 5, 3, 6, 7, 10, 56, 23, 45, 2];

const i = binarySearch(sort(arr), 6);
console.log(sort(arr));
console.log(i);
