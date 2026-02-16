<template>
  <div class="container about-page">
    <div class="about-hero">
      <h1>About SPEC</h1>
      <p>A tiny frontend blog demo showing fetch, local posts and image previews.</p>
    </div>

    <div class="about-content">
      <h2>About SPEC</h2>
      <p>
        SPEC is a student group at Jimma University formed by software engineering students
        who are driven to learn, grow, and build together. As a supportive learning
        community, we pursue hands-on projects, peer-led workshops, and collaborative
        challenges that strengthen our practical skills and prepare us for careers in
        software development. Through shared mentorship and real-world practice, SPEC
        members explore modern web technologies and grow as confident, capable developers.
      </p>

      <h3>How to use</h3>
      <ul>
        <li>Visit the Create page to publish a post (image URL optional).</li>
        <li>Click a post to view details and delete it.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// static about page — no script logic needed
</script>

<style scoped>
.about-hero {
  background: linear-gradient(0deg, rgba(37,99,235,0.85), rgba(37,99,235,0.85)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 48px 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.about-hero h1 { font-size: 36px; margin-bottom: 8px }
.about-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 760px;
  margin: 18px auto 0 auto;
}
.about-content h2 { margin-bottom: 8px }
.about-content p { color: #444 }
.about-content ul { list-style: none; padding-left: 0; color: #444 }
</style>
