// MAX NUMBER ON ARRAY
import { head } from '../utils/utils';

export const max = (arr: ReadonlyArray<number>): number =>
  // base case : dot not need to calculate
  arr.length < 2
    ? head(arr)
    // base case to stop recursion
    : max(arr.slice(1)) > head(arr)
    // recursive case
    ? max(arr.slice(1))
    : head(arr);
