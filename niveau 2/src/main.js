import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import router from './routes';

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
