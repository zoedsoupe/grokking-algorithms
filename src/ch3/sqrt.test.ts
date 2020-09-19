import { sqrt } from './sqrt';

describe("test newthon's square root", () => {
  it('should return correct square root', () => {
    const ns: readonly number[] = [2, 25, 49, 81];
    const res = [1.4, 5, 7, 9];

    ns.forEach((n, i) => expect(sqrt(n)).toBeGreaterThanOrEqual(res[i]));
  });
});
