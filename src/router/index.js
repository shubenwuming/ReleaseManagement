import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
  //  默认跳转
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/publishManagement/projectList',
    component: () => import('@/views/home/index.vue'),
    children: [
      // 发布管理
      {
        path: '/home/publishManagement',
        name: 'publishManagement',
        redirect: '/home/publishManagement/projectList',
        component: () => import('@/views/home/publishManagement/index.vue'),
        children: [
          // 发布管理 > 项目列表
          {
            path: '/home/publishManagement/projectList',
            name: 'publishList',
            component: () => import('@/views/home/publishManagement/projectList/index.vue')
          },
          // 发布管理 > 项目详情
          {
            path: '/home/publishManagement/:project/detail',
            name: 'publishDetail',
            component: () => import('@/views/home/publishManagement/projectDetail/index.vue')
          }
        ]
      },
      // 项目管理
      {
        path: '/home/projectManagement',
        name: 'projectManagement',
        redirect: '/home/projectManagement/projectList',
        component: () => import('@/views/home/projectManagement/index.vue'),
        children: [
          // 项目管理 > 项目列表
          {
            path: '/home/projectManagement/projectList',
            name: 'projectList',
            component: () => import('@/views/home/projectManagement/projectList/index.vue')
          },
          // 项目管理 > 项目详情
          {
            path: '/home/projectManagement/:project/detail',
            name: 'projectDetail',
            component: () => import('@/views/home/projectManagement/projectDetail/index.vue')
          }
        ]
      },
      // 个人中心
      {
        path: '/home/user/:id',
        name: 'user',
        component: () => import('@/views/home/user/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router