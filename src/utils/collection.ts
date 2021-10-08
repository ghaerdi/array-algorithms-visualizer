import type { Collection as ICollection } from "../types";
import { shuffle } from "./array";

export class Collection<T> extends Array<T> implements ICollection<T> {
  constructor(...args: T[]) {
    super();
    this.push(...args);
  }

  swap(i: number, j: number): void {
    [this[i], this[j]] = [this[j], this[i]];
  }

	shuffle(): void {
		shuffle(this);
	}
}