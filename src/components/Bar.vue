<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import type { Bar, Color } from "../types";

interface Props extends Bar {
  value: number;
  color: Color;
  len: number;
}

const props = defineProps<Props>();
const { value, len } = toRefs(props);
const size = 10 + value.value / (len.value/50);
const style = `height: ${size}vh`;
</script>

<template>
  <div :class="'item ' + color" :style="style" :index="value">
  </div>
</template>

<style lang="postcss" scoped>
.item {
  font-weight: bold;
  width: 100%;

  &.highlight {
    background-color: #fa87a4;
  }
  &.check {
    background-color: #cf9ee0;
  }
  &.default,
  & {
    background-color: #f7ddff;
  }
}
</style>