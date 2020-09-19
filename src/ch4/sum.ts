// SUM
import { head } from '../utils/utils';

export const sum = (arr: ReadonlyArray<number>): number =>
  arr.length === 1 ? head(arr) : head(arr) + sum(arr.slice(1));
