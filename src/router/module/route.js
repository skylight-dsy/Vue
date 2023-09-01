const routes = [
    {
        path: '/topmediai', //路径
        name: 'topmediai',// 命名路由-路由名称
        component: () => import ('@/views/topmediai/index.vue'),   // 命名视图组件
        meta: { 
            title: 'TopMediAI'
        }
    }
]
export default routes;