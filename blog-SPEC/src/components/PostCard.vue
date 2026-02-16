<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  post: Object
})
</script>

<template>
  <div class="card">
    <img v-if="post.image" :src="post.image" :alt="post.title" class="card-img" />
    <h2>{{ post.title }}</h2>
    <p>{{ (post.content || post.body || '').slice(0, 100) }}...</p>

    <RouterLink :to="`/post/${post.id}`">
      Read More →
    </RouterLink>
  </div>
</template>
