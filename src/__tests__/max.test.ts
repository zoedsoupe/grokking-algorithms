import { max } from '../ch4/max';

describe('test max function', () => {
  it('should return the max number from array', () => {
    const arrs: readonly number[][] = [
      [1, 4, 5, 6, 1, 10],
      [6, 234, 1, 4, 345, 7],
      [5],
      [7, 3, 5, 6],
    ];
    const res = [10, 345, 5, 7];

    arrs.forEach((arr, i) => expect(max(arr)).toEqual(res[i]));
  });
});
