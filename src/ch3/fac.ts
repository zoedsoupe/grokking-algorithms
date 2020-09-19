// FACTORIAL

export const factorial = (n: number, a = 1): number =>
  n < 1 ? a : factorial(n - 1, n * a);
