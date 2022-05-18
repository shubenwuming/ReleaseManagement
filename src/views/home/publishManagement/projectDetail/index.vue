<script setup>
  import {useRoute} from 'vue-router'
  import {ref, reactive, onMounted, inject} from 'vue'

  import Breadcrumb from './compontents/breadcrumb.vue'
  import TableCom from './compontents/tableCom.vue'
import VueSocketIO from "vue-socket.io";
  import { getPublishList, deployPublish } from '@/apis/publishManagement.js'
  
  const route = useRoute();
  onMounted(() => {
    console.log(route.params.project)
  })

  const breadcrumbList = [
    {path: { name: 'publishList' }, value: '发布管理'},
    {path: '', value: `项目详情 (${route.params.project})`},
  ]

  const form = reactive({
    branchName: 'test',
    envType: 'test'
  })

  
  const tableData = ref([])
  const getList = async params => {
    try {
      const {
        status,
        data: { message, result: res },
      } = await getPublishList({
        ...params,
        projectId: route.params.project
      })
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

  const onSearch = () => {
    getList(form)
  }
  onSearch() 
  const handleDeploy = async () => {
    try {
      setTimeout(() => {
        onSearch()
      }, 1000)
      const {
        status,
        data: { message, result: res },
      } = await deployPublish({
        ...form,
        projectId: Number(route.params.project),
        operator: 'yushibo11'
      })
      if (status === 200) {
          onSearch()
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

  
</script>

<template>
  <div class="projectDetail">
    <!-- 面包屑 -->
    <breadcrumb :breadcrumb-list="breadcrumbList" />
    
    <!-- search -->
    <el-form class="myForm" :model="form" label-width="80px" label-position="left">
      <el-form-item label="选择分支:">
        <el-radio-group v-model="form.branchName">
          <el-radio label="test" />
          <el-radio label="test_tmp" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="选择环境:">
        <el-radio-group v-model="form.envType">
          <el-radio label="test" />
          <el-radio label="pre" />
          <el-radio label="prod" />
          <el-radio label="all" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="button">
      <el-button size="small" type="info" @click="handleDeploy">部署</el-button>
    </div>
    <!-- show -->
    <p class="lastCommit">
      <span>{{`当前${form.branchName === 'all' ? '所有' :  form.branchName}分支最后一次提交: `}}</span>
      <time>(2022-01-02)</time>
      +
      <span>(提交内容提交内容提交内容提交内容提交内容)</span>
    </p>

    <!-- table -->
    <div class="table">
      <table-com :table-data="tableData" />
    </div>
  </div>
</template>

<style lang="scss" scope>
  .projectDetail { 
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
    .myForm {
      .el-form-item {
        margin-bottom: 0;
      }
    }
    .lastCommit {
      height: 36px;
      line-height: 36px;
    }
    .table {
      flex: 1;
      overflow: hidden;
      margin-bottom: 10px;
      background-color: pink;
    }
  }
</style>