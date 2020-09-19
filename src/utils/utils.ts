// sort number arrays
export const sort = (x: ReadonlyArray<number>): ReadonlyArray<number> =>
  [...x].sort((a, b) => a - b);
