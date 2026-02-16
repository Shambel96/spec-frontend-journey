<template>
  <div class="container" v-if="post">
    <div class="card">
      <h1>{{ post.title }}</h1>
      <p style="margin-top: 15px;">
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Example post data; replace with actual data fetching logic as needed
const post = ref({
  title: 'Sample Post Title',
  content: 'This is the content of the post.'
})
</script>
