
<template>
  <div class="container">
    <h1 style="margin-bottom: 20px;">All Posts</h1>

    <div class="grid">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      posts: [] // Replace with actual posts or fetch them as needed
    };
  }
};
</script>
