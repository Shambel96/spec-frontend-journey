<template>
  <div class="counter">
    <h1>{{ count }}</h1>

    <button @click="increment">+</button>

    <button
      @click="decrement"
      :disabled="count === 0"
    >
      –
    </button>
  </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.counter {
  text-align: center;
  margin-top: 50px;
}

button {
  padding: 10px 16px;
  font-size: 18px;
  margin: 0 6px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
