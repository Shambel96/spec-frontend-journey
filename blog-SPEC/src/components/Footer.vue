<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h3>SPEC Blog</h3>
        <p>Frontend demo project</p>
      </div>

      <div>
        <h4>Links</h4>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/create">Create Post</RouterLink></li>
          <li><a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener">Dummy API</a></li>
        </ul>
      </div>

      <div>
        <h4>Follow</h4>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.site-footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 28px 0;
  margin-top: 40px;
}
.footer-grid {
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
}
.site-footer h3, .site-footer h4 {
  color: #fff;
  margin-bottom: 8px;
}
.site-footer a { color: #93c5fd; text-decoration: none }
.site-footer ul { list-style: none; padding: 0 }
.site-footer li { margin-bottom: 6px }
</style>
