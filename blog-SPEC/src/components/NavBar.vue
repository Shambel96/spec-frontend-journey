<template>
  <nav class="navbar">
    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create">Create Post</RouterLink>
    </div>

    <button @click="toggleAuth" class="btn btn-primary">
      {{ isAuth ? 'Logout' : 'Login' }}
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isAuth = ref(false)

function toggleAuth() {
  isAuth.value = !isAuth.value
}
</script>
