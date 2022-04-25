import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
  // 发布管理
  {
    path: '/versionPubish',
    name: 'VersionPubish',
    redirect: '/versionPubish/list',
    component: () => import('@/views/versionPublish/index.vue'),
    children: [
      // 项目列表
      {
        path: '/list',
        name: 'list',
        component: () => import('@/views/versionPublish/list/index.vue')
      },
      // 项目详情
      {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/versionPublish/detail/index.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router