import {
  bubblesort,
  insertionsort,
  // mergesort,
  quicksort,
  selectionsort,
} from "../../src/utils/algorithms";
import { toCollection } from "../../src/utils/toCollection";
import { range, shuffle } from "../../src/utils/array";

const numbers = shuffle(range(5));

describe("Bubble sort", () => {
  it("organize array", async () => {
    const collection = toCollection(numbers);
    await bubblesort(collection, { steps: 0 });
    expect(collection.map((el) => el.value)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("Selection sort", () => {
  it("organize array", async () => {
    const collection = toCollection(numbers);
    await selectionsort(collection, { steps: 0 });
    expect(collection.map((el) => el.value)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("Insertion sort", () => {
  it("organize array", async () => {
    const collection = toCollection(numbers);
    await insertionsort(collection, { steps: 0 });
    expect(collection.map((el) => el.value)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("Quick sort", () => {
  it("organize array", async () => {
    const collection = toCollection(numbers);
    await quicksort(collection, { steps: 0 });
    expect(collection.map((el) => el.value)).toEqual([0, 1, 2, 3, 4]);
  });
});

// describe("Merge sort", () => {
//   it("organize array", async () => {
//     const collection = toCollection(numbers);
//     await mergesort(collection, { steps: 0 });
//     expect(collection.map((el) => el.value)).toEqual([0, 1, 2, 3, 4]);
//   });
// });
