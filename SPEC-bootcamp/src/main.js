import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GreetingApp from './greetingApp.vue'

// Mount the main App component
createApp(App).mount('#app')

createApp(GreetingApp).mount('#app')