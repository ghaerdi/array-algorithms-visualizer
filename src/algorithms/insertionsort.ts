import type { Bar, Counter } from "../types";
import { Collection } from "../utils/collection";
import { toCheck, toDefault, toHighlight } from "../utils/colors";

export default async function insertionsort(
  arr: Collection<Bar>,
  counter: Counter
) {
  for (const [i, _] of arr.entries()) {
    let j = i;
    while (j > 0 && arr[j].value < arr[j - 1].value) {
      await toHighlight(arr[j], arr[j ? j - 1 : 0]);
      toDefault(...arr);
      arr.swap(j, j - 1);
      j--;
      counter.steps++;
    }
    counter.steps++;
  }
  toCheck(...arr);
}
