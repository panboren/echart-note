import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 初始化 样式
import './assets/css/reset.min.css'
// element-plus 样式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义主题 样式
import './assets/css/theme/index.scss'
import 'element-plus/dist/index.css'
// rem匹配插件
import 'amfe-flexible'
import directive from '@/directive/index'
const app = createApp(App)
app.use(createPinia())
app.use(directive)
app.use(router)

app.mount('#app')
