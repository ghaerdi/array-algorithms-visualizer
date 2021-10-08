import { range, shuffle } from '../../src/utils/array';

describe("range", () => {
	it("should return an array of numbers", () => {
		expect(range(5)).toEqual([0, 1, 2, 3, 4]);
	});
})

describe("shuffle", () => {
	it("should randomize an array of number", () => {
		const arr = [1, 2, 3, 4, 5];
		const len = arr.length;
		expect(String(shuffle(arr))).toMatch(/1|2|3|4|5/);
		expect(len).toEqual(5);
	})
})
