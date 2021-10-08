import { bubblesort, quicksort } from "../../src/utils/algorithms";
import { Collection } from "../../src/utils/collection";
import { toCollection } from "../../src/utils/toCollection";
import { range, shuffle } from '../../src/utils/array';
import type { Counter } from "../../src/types";

const numbers = shuffle(range(5));

describe("Bubble sort", () => {
	it("organize array", async () => {
		const collection = toCollection(numbers);
		await quicksort(collection, { steps: 0 });
		expect(collection.map(el => el.value)).toEqual([0, 1, 2, 3, 4]);
	})
})
