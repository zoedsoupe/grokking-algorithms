import { factorial } from './fac';

describe('test factorial function', () => {
  it('should return correct n!', () => {
    const n = 5;
    const fac = 120;

    expect(factorial(n)).toEqual(fac);
  });
});
