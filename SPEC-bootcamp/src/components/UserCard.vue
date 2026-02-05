<template>
  <div class="card" :class="statusClass">
    <h2>{{ name }}</h2>
    <p class="role">{{ role }}</p>

    <p class="status">
      <span v-if="status === 'online'">🟢</span>
      <span v-else>🔴</span>
    </p>

    <button @click="viewProfile">
      View Profile
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    validator: value => ['online', 'offline'].includes(value)
  }
})

const emit = defineEmits(['view-profile'])

const statusClass = computed(() => {
  return props.status === 'online' ? 'online' : 'offline'
})

function viewProfile() {
  emit('view-profile', props.name)
}
</script>

<style scoped>
.card {
  border: 2px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  width: 220px;
  text-align: center;
}

.card.online {
  border-color: green;
}

.card.offline {
  border-color: red;
}

.role {
  color: #555;
  font-size: 14px;
}

.status {
  margin: 8px 0;
}

button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
