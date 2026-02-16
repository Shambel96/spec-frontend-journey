<template>
  <div class="card" v-if="post">
    <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src="post.image" :alt="post.title" class="detail-img" />
      <p style="margin-top: 15px;">{{ post.content }}</p>

    <div style="margin-top:20px;">
      <button class="btn btn-primary" @click="router.push(`/edit/${post.id}`)">
        Edit
      </button>

      <button
        class="btn"
        style="background:#dc2626; color:white; margin-left:10px;"
        @click="removePost"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePosts } from '../composables/usePosts'

const route = useRoute()
const router = useRouter()
const post = ref(null)

const { getPostById, fetchRemote, deletePost } = usePosts()

onMounted(async () => {
  await fetchRemote()
  post.value = getPostById(route.params.id)
})

function removePost() {
  if (!post.value) return
  deletePost(post.value.id)
  router.push('/')
}
</script>
      const { getPostById, fetchRemote, deletePost } = usePosts()
