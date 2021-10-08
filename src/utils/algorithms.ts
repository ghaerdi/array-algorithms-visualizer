import type { Bar, Collection, Counter } from "../types";
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

      await toDefault(arr[j], arr[j + 1]);
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
  toCheck(...arr)
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
  counter: Counter,
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
  counter: Counter,
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

// export async function mergesort(arr: number[], low: number, high: number) {
//   if (low < high) {
//     const mid = Math.floor((low + high) / 2);
//     await mergesort(arr, low, mid);
//     await mergesort(arr, mid + 1, high);
//     await merge(arr, low, mid, high);
//   }
// }

// async function merge(
//   arr: number[],
//   low: number,
//   mid: number,
//   high: number,
// ) {
//   const temp = [];
//   let i = low;
//   let j = mid + 1;
//   while (i <= mid && j <= high) {
//     if (arr[i] <= arr[j]) {
//       temp.push(arr[i]);
//       i++;
//     } else {
//       temp.push(arr[j]);
//       j++;
//     }
//   }
//   while (i <= mid) {
//     temp.push(arr[i]);
//     i++;
//   }
//   while (j <= high) {
//     temp.push(arr[j]);
//     j++;
//   }
//   for (let k = low; k <= high; k++) {
//     arr[k] = temp[k - low];
//   }
//   await sleep(waitTime);
// }
