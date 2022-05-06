import { createApp } from 'vue'
import App from './App.vue'

// 解决问题-index.ts:12 [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event.
import 'default-passive-events'

// element-plus 自动按需导入，消息弹不出来，故在此全局注册部分组件
import { ElMessage, ElMessageBox } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css';
import 'element-plus/theme-chalk/el-message-box.css';


import router from '@/router/index'

createApp(App)
  .use(router)
  .use(ElMessage)
  .use(ElMessage)
  .mount('#app')
