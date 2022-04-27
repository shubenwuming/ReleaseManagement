<script setup>
  const menuList = [
    {path: '/home/publishManagement/projectList', value: '发布管理'},
    {path: '/home/projectManagement/projectList', value: '项目管理'},
    {path: '/home/user/123', value: '用户中心'}
  ]

  const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
  }
  const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
  }
</script>

<template>
    <div class="aside">
       <el-menu
        router
        default-active="/home/publishManagement"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item v-for="item in menuList" :key="item.path" :index="item.path">
          <span>{{item.value}}</span>
        </el-menu-item>
      </el-menu>

      </div>
</template>

<style lang="scss" scope>
  .aside {
    width: 200px;
    border: 3px solid #ccc;
    box-sizing: border-box;
    overflow: auto;

    .el-menu-item {
      border-bottom: 3px solid #ccc;
      box-sizing: border-box;
      justify-content: center;
    }
  }
</style>