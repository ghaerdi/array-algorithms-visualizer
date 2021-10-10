import type { Bar, Counter } from "../types";
import { Collection } from "../utils/collection";
import { toCheck, toDefault, toHighlight } from "../utils/colors";

export default async function mergesort(
  arr: Collection<Bar>,
  counter: Counter
) {
  await _mergesort(arr, 0, arr.length - 1, counter);
  toCheck(...arr);
}

export async function _mergesort(
  arr: Collection<Bar>,
  low: number,
  high: number,
  counter: Counter
) {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  await _mergesort(arr, low, mid, counter);
  await _mergesort(arr, mid + 1, high, counter);
  await _sort(arr, low, mid, high, counter);
}

async function _sort(
  arr: Collection<Bar>,
  low: number,
  mid: number,
  high: number,
  counter: Counter
) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  const leftArray = arr.slice(low, mid + 1);
  const rightArray = arr.slice(mid + 1, high + 1);

  let i = 0;
  let j = 0;
  let k = low;

  while (i < n1 && j < n2) {
    await toHighlight(arr[k]);
    if (leftArray[i].value <= rightArray[j].value) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
    counter.steps++;
    toDefault(...arr);
  }

  while (i < n1) {
    arr[k] = leftArray[i];
    k++;
    i++;
    counter.steps++;
  }

  while (j < n2) {
    arr[k] = rightArray[j];
    k++;
    j++;
    counter.steps++;
  }
}
