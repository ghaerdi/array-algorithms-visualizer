<script setup lang="ts">
import { toRefs, ref } from "vue";
import {
  bubblesort,
  insertionsort,
  selectionsort,
  quicksort,
  mergesort
} from "../utils/algorithms";
import type { Collection, Bar, Counter } from "../types";
import { toDefault } from "../utils/colors";

interface Props {
  numbers: Collection<Bar>;
  counter: Counter;
}

const props = defineProps<Props>();
const { numbers, counter } = toRefs(props);

const algorithms = ref([
  {
    name: "Bubble Sort",
    run() {
      bubblesort(numbers.value, counter.value);
    },
  },
  {
    name: "Insertion Sort",
    run() {
      insertionsort(numbers.value, counter.value);
    },
  },
  {
    name: "Selection Sort",
    run() {
      selectionsort(numbers.value, counter.value);
    },
  },
  {
    name: "Quick Sort",
    run() {
      quicksort(numbers.value, counter.value);
    },
  },
  {
    name: "Merge Sort",
    run() {
      mergesort(numbers.value, counter.value);
    }
  }
]);

async function randomize(arr: Collection<Bar>) {
  await toDefault(...numbers.value);
  arr.shuffle();
  counter.value.steps = 0;
}
</script>

<template>
  <div id="algorithm-menu">
    <div class="pointer name" @click="randomize(numbers)">Random</div>
    <div
      v-for="(item, index) in algorithms"
      :key="index"
      class="pointer"
      @click="item.run()"
    >
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
#algorithm-menu {
  background-color: rgb(124, 124, 252);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  & .pointer {
    cursor: pointer;
  }
  & .name {
    color: #fff;
  }
}
</style>
