import { sleep } from "./sleep";
import type { Bar, Color } from "../types";

const time = 1;

function changeColor(color: Color, time: number = 0) {
  return async (...items: Bar[]) => {
    await sleep(time);

    items.forEach((item) => {
      item.color = color;
    });
  };
}

export const toDefault = changeColor("default");
export const toCheck = changeColor("check", time);
export const toHighlight = changeColor("highlight", time);
