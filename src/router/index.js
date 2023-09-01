import routes from './module/route.js'
// 引入vue-router路由依赖
import { createRouter,createWebHistory } from 'vue-router'
// 定义路由配置
const router = createRouter({
  history: createWebHistory(),  // 必须有history选项,createWebHistory,非createWebHashHistory(),否则url会有#字符
  routes // routes: routes的缩写
})
export default router;