<script setup lang="ts">
import { range, shuffle } from "../utils/array";
import { ref } from "vue";
import { toCollection } from "../utils/toCollection";
import Bar from "../components/Bar.vue";
import AlgorithmMenu from "../components/AlgorithmMenu.vue";
import Counter from "../components/Counter.vue";

const len = 200;
const numbers = shuffle(range(len));
const collection = ref(toCollection(numbers));
const counter = ref({ steps: 0 });
</script>

<template>
  <div class="container">
    <div id="bars">
      <Bar
        v-for="item in collection"
        :key="item.value"
        :color="item.color"
        :value="item.value"
        :len="len"
      />
    </div>
    <Counter :counter="counter" />
    <AlgorithmMenu class="menu" :numbers="collection" :counter="counter" />
  </div>
</template>

<style lang="postcss" scoped>
.container {
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 50px;
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  & #bars {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
