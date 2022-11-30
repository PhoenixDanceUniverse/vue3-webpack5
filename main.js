import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import 'vant/es/button/index.css'
const app = createApp(App)

app.use(router).use(store).mount('#app')