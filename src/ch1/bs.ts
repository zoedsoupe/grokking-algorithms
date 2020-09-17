// BINARY SEARCH
export const binarySearch = (
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
