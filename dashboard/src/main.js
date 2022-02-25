import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSelect from 'vue-next-select'

createApp(App).use(router).component('vue-select', VueSelect).mount('#app')
