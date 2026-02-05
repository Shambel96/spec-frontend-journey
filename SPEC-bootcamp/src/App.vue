<template>
  <div class="container">
    <UserCard name="Mr.Z" role="Team Members" />
    <UserCard name="Mr.X" role="Project Manager" />
    <UserCard name="Mr.Y" role="Admin" />
  </div>
</template>

<script setup>
import UserCard from "./components/UserCard.vue"
</script>

<style>
.container {
  display: flex;
  gap: 20px;
  padding: 20px;
}
</style>
