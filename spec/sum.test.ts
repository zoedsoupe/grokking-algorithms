import { sum } from "../ch4/sum";

describe("test recursive sum function", () => {
  it("should sum correctly", () => {
    const arrs: readonly number[][] = [
      [1, 2, 3, 4],
      [5, 3, 1],
      [9, 8, 58],
    ];
    const expected = [10, 9, 75];

    arrs.forEach((arr, i) => expect(sum(arr)).toEqual(expected[i]));
  });
});
