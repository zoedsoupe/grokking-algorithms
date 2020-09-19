import { selectionSort } from '../ch2/sls';

describe('test selection sort algorithm', () => {
  it('should return sorted array', () => {
    const arr: ReadonlyArray<number> = [5, 4, 9, 10, 23, 1, 0, 2];
    const sorted: ReadonlyArray<number> = [0, 1, 2, 4, 5, 9, 10];

    expect(selectionSort(arr)).toEqual(sorted);
  });
});
