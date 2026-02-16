<template>
  <div class="create-page">
    <div class="form-card container">
      <h1 class="form-title">{{ isEditMode ? 'Edit Post' : 'Create Post' }}</h1>

      <div class="form-field">
        <label>Title</label>
        <input class="input" v-model="title" placeholder="Title" />
      </div>

      <div class="form-field">
        <label>Image URL (optional)</label>
        <input class="input" v-model="image" placeholder="https://..." />
        <img v-if="image" :src="image" alt="preview" class="image-preview" />
      </div>

      <div class="form-field">
        <label>Content</label>
        <textarea class="textarea" v-model="content" placeholder="Write your post..."></textarea>
      </div>

      <div class="form-actions">
        <button @click="handleSubmit" class="btn btn-primary">
          {{ isEditMode ? 'Save' : 'Publish' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePosts } from '../composables/usePosts'
import { useRouter, useRoute } from 'vue-router'

const title = ref('')
const content = ref('')
const image = ref('')
const router = useRouter()
const route = useRoute()

const { addPost, getPostById, updatePost } = usePosts()

const isEditMode = route.path.includes('edit')

onMounted(() => {
  if (isEditMode) {
    const post = getPostById(route.params.id)
    if (post) {
      title.value = post.title
      content.value = post.content
      image.value = post.image || ''
    }
  }
})

async function handleSubmit() {
  if (!title.value || !content.value) {
    alert('Fill all fields')
    return
  }

  if (isEditMode) {
    updatePost({
      id: Number(route.params.id),
      title: title.value,
      content: content.value,
      image: image.value || undefined
    })
  } else {
    await addPost({
      title: title.value,
      content: content.value,
      image: image.value || undefined
    })
  }

  router.push('/')
}
</script>
