export type Color = "default" | "check" | "highlight";

export interface Bar {
  value: number;
  color: Color;
}

export interface Collection<T> extends Array<T> {
  [index: number]: T;
  swap(i: number, j: number): void;
  shuffle(): void;
}

export interface Counter {
  steps: number;
}
