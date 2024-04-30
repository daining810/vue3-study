import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue' // 根组件
import router from './router'

const app = createApp(App) // 创建新的应用实例

app.use(createPinia())
app.use(router)

// 应用配置:https://cn.vuejs.org/api/application.html#app-config
app.config.errorHandler = (err, vm, info) => {
    console.error('errorHandler', err, vm, info)
}
app.config.globalProperties.$msg = 'hello vue3'

// 注册全局组件:https://cn.vuejs.org/api/application.html#app-component
// 全局指令、过滤器、组件等类似
// app.component()

app.mount('#app') // 挂载并返回根组件实例

// 创建多个实例并挂载,比如在一个大型应用的某个子页面挂载一个新的应用实例
// const app1 = createApp({
//     /* ... */
// })
// app1.mount('#container-1')
