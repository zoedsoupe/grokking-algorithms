// BINARY SEARCH
export const binarySearch = (
  arr: ReadonlyArray<number>,
  item: number,
  l = 0
): number => {
  // base case, not found the item
  if (arr.length < 1) return -1;

  // get middle of the list
  const mid = (arr.length / 2) | 0;

  // base case 2: found item
  if (arr[mid] === item) return l + mid;

  // recursive case, sends a
  // specific half of the list
  return arr[mid] > item
    ? binarySearch(arr.slice(0, mid), item, l)
    : binarySearch(arr.slice(mid + 1), item, mid + l + 1);
};
