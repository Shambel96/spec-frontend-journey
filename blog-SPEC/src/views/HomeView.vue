
<template>
  <div>
    <section class="hero">
      <div class="hero-overlay">
        <h1 class="hero-title">SPEC</h1>
        <p class="hero-sub">A simple frontend blog demo</p>
      </div>
    </section>

    <div class="container">
      <h1 style="margin-bottom: 20px;">All Posts</h1>

      <div class="grid">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { usePosts } from '../composables/usePosts'
import PostCard from '../components/PostCard.vue'

const { fetchRemote, allPosts } = usePosts()

const posts = computed(() => allPosts())

onMounted(() => {
  // fetch remote posts once on mount (local posts are loaded by composable)
  fetchRemote()
})
</script>
