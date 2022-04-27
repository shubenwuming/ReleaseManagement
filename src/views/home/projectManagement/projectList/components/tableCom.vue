<script setup>
  import {defineProps} from 'vue';
  import {useRouter} from 'vue-router'
  const router = useRouter()
  const props = defineProps(
    {
      tableData: {
        type: Array,
        default: () => []
      }
    }
  )

  const jumpDetail = (row) => {
    router.push({name: 'projectDetail', params: { project: row.name}})
    console.log('jumpDetail', row)
  }

  const unuseHandler = (row) => {
    console.log('unuseHandler', row)
  }
</script>

<template>
  <el-table height="100%" :data="props.tableData" border style="width: 100%">
    <el-table-column show-overflow-tooltip align="center" label="项目名称">
      <template #default="scope">
        <router-link class="myLink" :to="{ name: 'projectDetail', params: { project:  scope.row.name}}">{{scope.row.name}}</router-link>
      </template>
    </el-table-column>

    <el-table-column show-overflow-tooltip align="center" label="项目简介" prop="description" />
    <el-table-column show-overflow-tooltip align="center" label="所属git库" prop="repository" />

    <el-table-column label="操作按钮" show-overflow-tooltip align="center">
      <template #default="scope">
        <el-button size="small" type="info" @click="jumpDetail(scope.row)">
          查看详情
        </el-button>
        <el-button size="small" type="info" @click="unuseHandler(scope.row)">
          废弃
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scope>
  .myLink:hover {
    text-decoration:underline;
    color: $color;
  }
</style>