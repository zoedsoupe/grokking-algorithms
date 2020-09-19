// SELECTION SORT

const findSmallest = (arr: ReadonlyArray<number>): number => Math.min(...arr);

const findIndex = (arr: ReadonlyArray<number>, n: number): number =>
  arr.indexOf(n);

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
  arr.length <= 1
    ? sorted
    : selectionSort(removeItem(arr, findSmallest(arr)), [
        ...sorted,
        findSmallest(arr),
      ]);
