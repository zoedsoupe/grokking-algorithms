import { sqrt } from './sqrt';

describe("test newthon's square root", () => {
  it('should return correct square root', () => {
    const n = 2;
    const res = 1.4;

    expect(sqrt(n)).toBeGreaterThanOrEqual(res);
  });
});
