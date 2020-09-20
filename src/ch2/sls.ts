// SELECTION SORT

// find the smallest item given an array
const findSmallest = (arr: ReadonlyArray<number>): number => Math.min(...arr);

// find the index of an item on an array
const findIndex = (arr: ReadonlyArray<number>, n: number): number =>
  arr.indexOf(n);

// return a copy an array
// without a specific item
const removeItem = (
  arr: ReadonlyArray<number>,
  n: number
): ReadonlyArray<number> => {
  const a = [...arr];
  a.splice(findIndex(a, n), 1);

  return a;
};

export const selectionSort = (
  arr: ReadonlyArray<number>,
  sorted: ReadonlyArray<number> = []
): ReadonlyArray<number> =>
  // base case
  arr.length <= 1
    ? sorted
    // recursive case:
    // calls selection sort again
    // always finding the smallest item
    : selectionSort(removeItem(arr, findSmallest(arr)), [
        ...sorted,
        findSmallest(arr),
      ]);
