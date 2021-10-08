import { random } from "./random";

export const range = (len: number) => [...Array(len).keys()];

export const shuffle = <T>(arr: T[]) => arr.sort(() => random(11) - 5);
