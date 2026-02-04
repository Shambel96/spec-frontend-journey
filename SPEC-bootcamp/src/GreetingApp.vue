<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';
const name = ref('');
</script>

<template>
    <div>
        <input v-model="name" placeholder="Type your name">
        <p>Selam, {{ name }}!</p>
    </div>
</template>