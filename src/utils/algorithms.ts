import type { Bar, Counter } from "../types";
import { Collection } from "./collection";
import { toCheck, toDefault, toHighlight } from "./colors";

export async function bubblesort(arr: Collection<Bar>, counter: Counter) {
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

export async function insertionsort(arr: Collection<Bar>, counter: Counter) {
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

export async function selectionsort(arr: Collection<Bar>, counter: Counter) {
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

export async function quicksort(arr: Collection<Bar>, counter: Counter) {
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

export async function mergesort(arr: Collection<Bar>, counter: Counter) {
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
