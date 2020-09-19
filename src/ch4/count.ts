// COUNT ELEMENTS ON ARRAY

export const count = (arr: ReadonlyArray<number>, a = 0): number =>
  arr.length < 1 ? a : count(arr.slice(1), a + 1);
