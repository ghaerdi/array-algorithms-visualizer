import type { Bar, Counter } from "../types";
import { Collection } from "../utils/collection";
import { toCheck, toDefault, toHighlight } from "../utils/colors";

export default async function selectionsort(arr: Collection<Bar>, counter: Counter) {
  for (let [i, _] of arr.entries()) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].value < arr[min].value) {
        min = j;
      }
      counter.steps++;
    }
    if (min !== i) {
      await toHighlight(arr[i], arr[min]);
      arr.swap(i, min);
      counter.steps++;
    }
    toDefault(...arr);
    counter.steps++;
  }
  toCheck(...arr);
}