import { count } from '../ch4/count';

describe('test count function', () => {
  it('should return correct number of elements', () => {
    const arrs: readonly number[][] = [[], [1], [1, 2], [1, 2, 3, 4, 5, 6]];
    const results = [0, 1, 2, 6];

    arrs.forEach((arr, i) => expect(count(arr)).toEqual(results[i]));
  });
});
