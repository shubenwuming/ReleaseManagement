<script setup>
import { ArrowRight, Search } from '@element-plus/icons-vue'
import Breadcrumb  from './components/breadcrumb.vue'
import TableCom from './components/tableCom.vue'
import { requestByGetProjectList } from '@/apis/projectManagement.js'

import {ref, reactive} from 'vue'

const breadcrumbList = [
  {path: { name: 'projectList' }, value: '发布管理'},
  {path: '/', value: '项目列表'},
]

const search = ref('')



const tableData = ref([])
// const tableHead = [
//   {
//     prop: 'name',
//     label: '项目名称'
//   },
//   {
//     prop: 'description',
//     label: '简介'
//   },
//   {
//     prop: 'option',
//     label: '操作按钮'
//   },
// ]
// 获取项目列表
const getProjectList = async params => {
  try {
    const {
      status,
      data: { message, result: res },
    } = await requestByGetProjectList(params)
    if (status === 200) {
      tableData.value = res
    } else {
      ElMessage({
        type: 'error',
        message: message,
        showClose: true,
        center: true,
        grouping: true,
      })
    }
  } catch (e) {
    ElMessage({
      type: 'error',
      message: e.message || '请求失败',
      showClose: true,
      center: true,
      grouping: true,
    })
  }
}
const form = reactive({
  name: '',
})
// 过滤查询
const onSearch = () => {
  getProjectList(form)
}
onSearch()
</script>

<template>
  <div class="projectList">
    <!-- 面包屑 -->
    <breadcrumb :breadcrumb-list="breadcrumbList" />

    <!-- search -->
    <div class="search">
      <el-input 
        v-model="search" 
        placeholder="搜索项目名称" 
        :prefix-icon="Search" 
        clearable
        @change="onSearch"
      />
    </div>

    <!-- table -->
    <div class="table">
      <!-- <table-com :table-head="tableHead" :table-data="tableData" /> -->
      <table-com :table-data="tableData" />
    </div>


  </div>
</template>

<style lang="scss" scope>
  .projectList {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    padding: 0 20px;
    .el-breadcrumb {
      height: 36px;
      line-height: 36px;
    }
    .search {
      width: 300px;
      margin-bottom: 16px;
    }
    .table {
      flex: 1;
      overflow: hidden;
      margin-bottom: 10px;
    }
  }
</style>