import { ref } from 'vue'

const posts = ref(JSON.parse(localStorage.getItem('posts')) || [])

function savePosts() {
  localStorage.setItem('posts', JSON.stringify(posts.value))
}

function addPost(post) {
  post.id = Date.now()
  posts.value.push(post)
  savePosts()
}

function getPostById(id) {
  return posts.value.find(p => p.id == id)
}

export function usePosts() {
  return { posts, addPost, getPostById }
}
