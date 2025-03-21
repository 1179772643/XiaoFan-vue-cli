import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const Pinia = createPinia()
Pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(Pinia)
app.mount('#app')
