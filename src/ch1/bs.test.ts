import { sort } from '../utils/utils';
import { binarySearch } from './bs';

describe('Test Binary Search algorithm', () => {
  it('should return the correct index of given a number', () => {
    const arr: ReadonlyArray<number> = [1, 5, 3, 6, 7, 10, 56, 23, 45, 2];

    const index = binarySearch(sort(arr), 6);

    expect(index).toEqual(4);
  });
});
