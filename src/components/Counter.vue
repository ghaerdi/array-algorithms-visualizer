<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";

interface Props {
  counter: {
    steps: number;
  };
}

defineProps<Props>();
</script>

<template>
  <div>
    <span class="counter">{{ counter.steps }}</span>
  </div>
</template>

<style lang="postcss" scoped>
.counter {
  color: white;
  font-size: 2rem;
}
</style>