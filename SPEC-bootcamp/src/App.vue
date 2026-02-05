<template>
  <div class="container">
    <UserCard name="Mr.Z" role="Team Members"   status="online"
      @view-profile="handleViewProfile"/>
    <UserCard name="Mr.X" role="Project Manager"   status="offline"
      @view-profile="handleViewProfile" />
    <UserCard name="Mr.Y" role="Admin"   status="online"
      @view-profile="handleViewProfile"/>
  </div>
</template>

<script setup>
import UserCard from "./components/UserCard.vue"

function handleViewProfile(name) {
  alert(`Viewing profile of ${name}`)
}
</script>

<style>
.container {
  display: flex;
  gap: 20px;
  padding: 20px;
}
</style>
