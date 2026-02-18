<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/create">Create Post</RouterLink>

    <button @click="toggleAuth">
      {{ isAuth ? 'Logout' : 'Login' }}
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAuth = ref(false)

onMounted(() => {
  isAuth.value = !!localStorage.getItem('isAuth')
})

function toggleAuth() {
  if (isAuth.value) {
    localStorage.removeItem('isAuth')
  } else {
    localStorage.setItem('isAuth', 'true')
  }

  isAuth.value = !isAuth.value
}
</script>
