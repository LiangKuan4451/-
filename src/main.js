import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios';
// axios.defaults.baseURL = "http://127.0.0.1:4523/m1/2499957-0-default"
import router from '@/router'
axios.defaults.baseURL = "http://localhost:8080"
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(pinia).use(ElementPlus, { locale: zhCn }).mount('#app');