<script setup>
  import { reactive } from 'vue'
  import breadcrumb from './components/breadcrumb.vue'
  import tableCom from './components/tableCom.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()  


  const form = reactive({
    name: '',
    state: ''   // 使用、弃用
  })

  const tableData = [
    {
      name: 'ruyi-h5',
      state: '使用',
      description: '如意',
      repository: 'ruyi-h5',
    },
    {
      name: 'ruyi-h5',
      state: '废弃',
      description: '如意',
      repository: 'ruyi-h5',
    }
  ]

  const add = () => {
    router.push({name: 'projectDetail', params: {project: 'addNewProject'}})
  }
</script>

<template>
  <div class="projectList">
    <!-- 面包屑 -->
    <breadcrumb class="breadcrumb" />
    <!-- search -->
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="form.name" placeholder="请输入项目名称" />
      </el-form-item>
      
      <el-form-item>
        <el-select v-model="form.state" placeholder="状态：使用/弃用">
          <el-option label="使用" value="shanghai" />
          <el-option label="弃用" value="beijing" />
        </el-select>
    </el-form-item>
    </el-form>
    <!-- 新增 -->
    <div class="button">
      <el-button size="small" type="info" @click="add">新增</el-button>
    </div>
    <!-- table -->
    <table-com :table-data="tableData" class="table" />
  </div>
</template>

<style lang="scss" scope>
  .projectList {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding:0 20px;
    .breadcrumb {
      height: 36px;
      line-height: 36px;
    }
    .button {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 16px;
    }
    .table {
      flex: 1;
      margin-bottom: 20px;
    }
  }

</style>