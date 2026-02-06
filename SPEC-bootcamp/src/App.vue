    <template>
      <div class="container">
        <h2>Counter App</h2>
        <Counter />
      </div>
    </template>

    <script setup>
    import HelloWorld from './components/HelloWorld.vue'
    import Counter from './components/Counter.vue'
    </script>
    <style scoped>
    h2 {
      text-align: center;
      margin-top: 20px;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
     border: 2px solid #ddd;
      border-radius: 10px;
      width: 300px;
      margin: 50px auto;
    }
    </style>