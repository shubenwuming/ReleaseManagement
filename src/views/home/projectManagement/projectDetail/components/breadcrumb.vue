<script setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  import { defineProps } from 'vue'

  const props = defineProps({
    breadcrumbList: {
      type: Array,
      default: () => []
    }
  })
</script>

<template>
   <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in props.breadcrumbList" :key="item">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style>

</style>