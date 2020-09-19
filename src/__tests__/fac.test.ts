import { factorial } from '../ch3/fac';

describe('test factorial function', () => {
  it('should return correct n!', () => {
    const ns: readonly number[] = [5, 4, 3, 1, 0];
    const results = [120, 24, 6, 1, 1];

    ns.forEach((n, i) => expect(factorial(n)).toEqual(results[i]));
  });
});
