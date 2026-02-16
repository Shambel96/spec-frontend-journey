import { ref } from 'vue'

const remotePosts = ref([])
const localPosts = ref([])
const loading = ref(false)

const LOCAL_KEY = 'localPosts'

function loadLocal() {
  if (typeof window !== 'undefined') {
    localPosts.value = JSON.parse(localStorage.getItem(LOCAL_KEY)) || []
  }
}

function saveLocal() {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(localPosts.value))
  }
}

async function fetchRemote() {
  loading.value = true
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    // normalize remote shape to { id, title, content }
    remotePosts.value = data.map(p => ({ id: p.id, title: p.title, content: p.body }))
  } finally {
    loading.value = false
  }
}

function allPosts() {
  // merge remote and local (local posts appear first)
  return [...localPosts.value.slice().reverse(), ...remotePosts.value]
}

function getPostById(id) {
  const nid = Number(id)
  const local = localPosts.value.find(p => p.id === nid)
  if (local) return local
  return remotePosts.value.find(p => p.id === nid)
}

async function addPost(post) {
  // post: { title, content }
  // send to dummy API (jsonplaceholder) for example, then persist locally
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: post.title, body: post.content })
    })
    const created = await res.json()
    // jsonplaceholder returns an id (usually 101); use a stable local id based on Date.now()
    const local = { id: Date.now(), title: post.title, content: post.content }
    localPosts.value.push(local)
    saveLocal()
    return local
  } catch (e) {
    // fallback: still save locally
    const local = { id: Date.now(), title: post.title, content: post.content }
    localPosts.value.push(local)
    saveLocal()
    return local
  }
}

function deletePost(id) {
  const nid = Number(id)
  localPosts.value = localPosts.value.filter(p => p.id !== nid)
  saveLocal()
}

function updatePost(updated) {
  const nid = Number(updated.id)
  const index = localPosts.value.findIndex(p => p.id === nid)
  if (index !== -1) {
    localPosts.value[index] = updated
    saveLocal()
    return
  }
  // not a local post: add to local as edited copy
  localPosts.value.push(updated)
  saveLocal()
}

export function usePosts() {
  loadLocal()
  return {
    remotePosts,
    localPosts,
    allPosts,
    fetchRemote,
    getPostById,
    addPost,
    deletePost,
    updatePost,
    loading
  }
}
