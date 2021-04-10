import { quickSort } from "../ch4/qsort";

describe("test quicksort function", () => {
  it("should correctly order a array", () => {
    const arrs: readonly number[][] = [
      [5, 4, 3, 2, 1],
      [2, 1],
      [],
      [6, 1, 9, 2, 5, 3],
    ];
    const res = [[1, 2, 3, 4, 5], [1, 2], [], [1, 2, 3, 5, 6, 9]];

    arrs.forEach((arr, i) => expect(quickSort(arr)).toEqual(res[i]));
  });
});
