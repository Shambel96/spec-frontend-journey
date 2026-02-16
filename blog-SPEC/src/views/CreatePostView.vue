<template>
  <div class="container">
    <h1 style="margin-bottom: 20px;">Create Post</h1>

    <input
      v-model="title"
      placeholder="Title"
      class="input"
    />

    <textarea
      v-model="content"
      placeholder="Content"
      class="textarea"
    ></textarea>

    <button @click="createPost" class="btn btn-primary">
      Publish
    </button>
  </div>
</template>
