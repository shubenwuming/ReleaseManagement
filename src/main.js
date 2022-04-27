import { createApp } from 'vue'
import App from './App.vue'

// 解决问题-index.ts:12 [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event.
import 'default-passive-events'

import router from '@/router/index'

createApp(App)
  .use(router)
  .mount('#app')
