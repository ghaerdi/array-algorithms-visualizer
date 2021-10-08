import { Collection } from "./collection";
import type { Bar } from "../types";

export function toCollection(arr: number[]): Collection<Bar> {
  const toBar = (value: number) => ({ value, color: "default" } as Bar);
  const obj: Bar[] = arr.map(toBar);
  return new Collection(...obj);
}
