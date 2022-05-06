/**
 * 项目管理相关接口
 */

import httpRequest from '@/request/index.js'

// 列表查询
export const requestByGetProjectList = (params) => {
  return httpRequest({
    method: 'POST',
    url: '/v1/api/getProjectList',
    data: params
  })
}


// 查看详情
export const requestByDetail = (params) => {
  return httpRequest({
    method: 'POST',
    url: '/v1/api/getProjectInfo',
    data: params
  })
}

// 废弃
export const requestByUnuse = (id) => {
  return httpRequest({
    method: 'POST',
    url: '/v1/api/deleteProject',
    data: { id }
  })
}

// 新增
export const requestByAdd = (params) => {
  return httpRequest({
    method: 'POST',
    url: '/v1/api/createProject',
    data: params
  })
}

// 修改
export const requestByEdit = (params) => {
  return httpRequest({
    method: 'POST',
    url: '/v1/api/updateProject',
    data: params
  })
}