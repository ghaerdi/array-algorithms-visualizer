import type { Bar, Counter } from "../types";
import { Collection } from "../utils/collection";
import { toCheck, toDefault, toHighlight } from "../utils/colors";

export default async function bubblesort(arr: Collection<Bar>, counter: Counter) {
  for (const [i, _] of arr.entries()) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (j === arr.length - 1) continue;
      if (arr[j].value > arr[j + 1].value) {
        await toHighlight(arr[j], arr[j + 1]);
        arr.swap(j, j + 1);
        counter.steps++;
      }

      toDefault(...arr);
      counter.steps++;
    }
  }
  toCheck(...arr);
}