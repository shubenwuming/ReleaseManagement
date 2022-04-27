<script setup>
  import Breadcrumb from './components/breadcrumb.vue'
  import { useRoute } from 'vue-router'
  import { reactive } from 'vue'
  const route = useRoute()
  console.log(route.params)

  const breadcrumbList = ['项目管理', '项目详情']
  if(route?.params?.project === 'addNewProject') {
    breadcrumbList.splice(1,1,'新增项目')
  }

  const form = reactive({
    name: '',
    repository: '',
    desc: '',
    person: '',
    state: ''
  })
</script>

<template>
  <div class="projectDetail">
    <breadcrumb :breadcrumb-list="breadcrumbList" />

    <el-form :model="form" class="myForm" label-width="100px" label-position="left">
      <el-form-item label="项目名称：">
        <el-input clearable v-model="form.name" />
      </el-form-item>

      <!-- 这个地方有问题， 新增的话有问题 -->
      <el-form-item label="所属git库">
        <el-select v-model="form.repository">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="简介">
        <el-input clearable v-model="form.desc" type="textarea" />
      </el-form-item>

      <el-form-item label="维护人员">
        <el-input clearable v-model="form.person" type="textarea" />
      </el-form-item>

      <el-form-item label="状态" prop="state">
        <el-radio-group v-model="form.state">
          <el-radio label="使用中" />
          <el-radio label="已弃用" />
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="info">
          {{route.params.project === 'addNewProject' ? '新增' : '修改'}}
        </el-button>
      </el-form-item>
    </el-form>



    
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
      flex: 1;
      overflow: auto;
      margin-bottom: 20px;
    }
  }
</style>