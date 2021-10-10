import type { Bar, Counter } from "../types";
import { Collection } from "../utils/collection";
import { toCheck, toDefault, toHighlight } from "../utils/colors";

export default async function quicksort(arr: Collection<Bar>, counter: Counter) {
  await _quicksort(arr, 0, arr.length - 1, counter);
  toCheck(...arr);
}

async function _quicksort(
  arr: Collection<Bar>,
  low: number,
  high: number,
  counter: Counter
) {
  if (low < high) {
    const pivot = await partition(arr, low, high, counter);
    await _quicksort(arr, low, pivot - 1, counter);
    await _quicksort(arr, pivot + 1, high, counter);
  }
}

async function partition(
  arr: Collection<Bar>,
  low: number,
  high: number,
  counter: Counter
) {
  const pivot = arr[high].value;
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j].value <= pivot) {
      if (arr[j].value != arr[i].value) {
        await toHighlight(arr[i], arr[j]);
        arr.swap(i, j);
        counter.steps++;
      }
      i++;
    }
    toDefault(...arr);
    counter.steps++;
  }
  arr.swap(i, high);
  counter.steps++;
  return i;
}