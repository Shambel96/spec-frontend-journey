import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import AboutView from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/post/:id',
    name: 'post-detail',
    component: PostDetailView
  },
  {
    path: '/create',
    name: 'create-post',
    component: CreatePostView
  },
  {
  path: '/edit/:id',
  name: 'edit-post',
  component: CreatePostView
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// No auth guard: allow all routes during development so fetched data can be inspected

export default router
