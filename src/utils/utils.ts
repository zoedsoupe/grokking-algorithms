// sort number arrays
export const sort = (x: ReadonlyArray<number>): ReadonlyArray<number> =>
  [...x].sort((a, b) => a - b);

// calc average
export const avg = (a: number, b: number) => (a + b) / 2;
