import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "normalize.css";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const app = createApp(App);
app.use(router).use(ElementPlus)

app.mount('#app')
