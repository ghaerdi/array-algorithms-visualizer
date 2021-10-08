import { sleep } from "./sleep";
import type { Bar, Color } from "../types";

const time = 100;

function changeColor(color: Color) {
  return async (...items: Bar[]) => {
    await sleep(time);
    items.forEach((item) => {
      item.color = color;
    });
  };
}

export const toCheck = changeColor("check");
export const toDefault = changeColor("default");
export const toHighlight = changeColor("highlight");
