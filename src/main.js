import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Router from './router'   // 应用配置的路由文件
import App from './App.vue'
import 'element-plus/dist/index.css'   // 应用全局
import './style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(Router)
app.mount('#app')