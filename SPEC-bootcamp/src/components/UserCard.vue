<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p class="role">{{ role }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 10px;
  width: 220px;
  text-align: center;
}

.role {
  color: #555;
  font-size: 14px;
}
</style>
