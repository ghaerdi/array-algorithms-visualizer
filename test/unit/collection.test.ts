import { Collection } from "../../src/utils/collection";

describe("Collection", () => {
	const collection = new Collection();

	it("check if inherits from array", () => {
		expect(Array.isArray(collection)).toBe(true);
	})

	it("should return an array of numbers", () => {
		const collection = new Collection(1, 2, 3);
		expect(collection).toEqual([1, 2, 3]);
	})

	it("check if swap method exist", () => {
		expect(collection.swap).toBeDefined();
	})

	it("swap two element", () => {
		const collection = new Collection(1, 2, 3);
		collection.swap(0, 1);
		expect(collection).toEqual([2, 1, 3]);
	})

	it("check if shuffle method exist (uses shuffle function already)", () => {
		expect(collection.shuffle).toBeDefined();
	})
})