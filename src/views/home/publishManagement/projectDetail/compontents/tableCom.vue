<script setup>
  import { defineProps } from 'vue'
  // debugger
  const props = defineProps({
    tableHead: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  })
</script>

<template>
  <el-table height="100%" :data="props.tableData" border  style="width: 100%">
   

    <el-table-column align="center" sortable  prop="time" label="发布时间" />
    <el-table-column align="center"  label="发布结果">
      <template #default="scope">
        <span :style="{color: scope.row.res === '成功'? 'blue': 'red'}">
          {{scope.row.res}}
        </span>
      </template>
    </el-table-column>
    <!-- <el-table-column align="center" label="操作按钮">
      <template #default="scope">
        {{scope.row}}
        <el-button type="info">查看日志详情</el-button>
      </template>
    </el-table-column> -->


     <!-- 展开内容 -->
    <el-table-column type="expand" label="展开查看日志" width="120">
      <template #default="props">
        <h4>日志如下：</h4>
        {{props.row}}
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scope>

</style>