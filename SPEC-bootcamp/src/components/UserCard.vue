<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Role: {{ role }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      name: "Shambel",
      role: "SWE",
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 250px;
}
</style>
