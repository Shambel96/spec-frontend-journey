import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import CreatePostView from '../views/CreatePostView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'post-detail',
    component: PostDetailView
  },
  {
    path: '/create',
    name: 'create-post',
    component: CreatePostView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuth')

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert('You must login first!')
    next('/')
  } else {
    next()
  }
})

export default router
