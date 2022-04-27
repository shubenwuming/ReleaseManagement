<script setup>
  import {useRoute} from 'vue-router'
  import {reactive, onMounted} from 'vue'

  import Breadcrumb from './compontents/breadcrumb.vue'
  import TableCom from './compontents/tableCom.vue'
  const route = useRoute();
  onMounted(() => {
    console.log(route.params.project)
  })

  const breadcrumbList = [
    {path: { name: 'publishList' }, value: '发布管理'},
    {path: '', value: `项目详情 (${route.params.project})`},
  ]

  const form = reactive({
    publishEnv: 'all'
  })

  const tableHead = [
    {
      prop: 'time',
      label: '发布时间'
    },
    {
      prop: 'res',
      label: '发布结果'
    },
    // {
    //   prop: 'option',
    //   label: '操作按钮'
    // },
  ]
  const tableData = [
    {
      time: '2022-02-02',
      res: '失败'
    },
    {
      time: '2022-02-22',
      res: '成功'
    }
  ]

  
</script>

<template>
  <div class="projectDetail">
    <!-- 面包屑 -->
    <breadcrumb :breadcrumb-list="breadcrumbList" />
    
    <!-- search -->
    <el-form class="myForm" :model="form" label-width="80px" label-position="left">
      <el-form-item label="选择环境:">
        <el-radio-group v-model="form.publishEnv">
          <el-radio label="test" />
          <el-radio label="pre" />
          <el-radio label="prod" />
          <el-radio label="all" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <!-- show -->
    <p class="lastCommit">
      <span>{{`当前${form.publishEnv === 'all' ? '所有' :  form.publishEnv}分支最后一次提交: `}}</span>
      <time>(2022-01-02)</time>
      +
      <span>(提交内容提交内容提交内容提交内容提交内容)</span>
    </p>

    <!-- table -->
    <div class="table">
      <table-com :table-head="tableHead" :table-data="tableData" />
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