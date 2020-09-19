// SUM

const head = (arr: ReadonlyArray<number>): number => arr[0];

export const sum = (arr: ReadonlyArray<number>): number =>
  arr.length === 1 ? head(arr) : head(arr) + sum(arr.slice(1));
