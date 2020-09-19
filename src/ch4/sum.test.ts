import { sum } from './sum';

describe('test recursive sum function', () => {
  it('should sum correctly', () => {
    const arr: ReadonlyArray<number> = [1, 2, 3, 4];
    const expected = 10;

    expect(sum(arr)).toEqual(expected);
  });
});
