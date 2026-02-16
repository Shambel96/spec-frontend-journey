<template>
  <div>
    <h1>Create Post</h1>

    <input v-model="title" placeholder="Title" />
    <textarea v-model="content" placeholder="Content"></textarea>

    <button @click="createPost">Publish</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePosts } from '../composables/usePosts'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const { addPost } = usePosts()
const router = useRouter()

function createPost() {
  if (!title.value || !content.value) {
    alert('Fill all fields')
    return
  }

  addPost({
    title: title.value,
    content: content.value
  })

  router.push('/')
}
</script>
