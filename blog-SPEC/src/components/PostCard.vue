<template>
  <div class="card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content.slice(0, 100) }}...</p>

    <RouterLink :to="`/post/${post.id}`">
      Read More →
    </RouterLink>
  </div>
</template>
