// MAX NUMBER ON ARRAY
import { head } from '../utils/utils';

export const max = (arr: ReadonlyArray<number>): number =>
  arr.length < 2
    ? head(arr)
    : max(arr.slice(1)) > head(arr)
    ? max(arr.slice(1))
    : head(arr);
