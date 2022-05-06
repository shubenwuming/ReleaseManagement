<script setup>
import Breadcrumb from './components/breadcrumb.vue'
import { useRoute, useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
const route = useRoute()
const router = useRouter()
import {
  requestByDetail,
  requestByAdd,
  requestByEdit,
} from '@/apis/projectManagement.js'
import { ElMessage } from 'element-plus'
/**
 * isAdd
 * 用途：判断新增还是修改(详情)
 * 取值：boolean ， ture:代表是新增，false代表是修改(详情)
 */
const isAdd = ref(!route?.query?.id ? true : false)

const breadcrumbList = ref(['项目管理', '项目详情'])

let form = ref({
  name: '',
  gitRepository: '',
  desc: '',
  people: '',
  status: '',
})
const rules = reactive({
  name: [{ required: true, message: 'name为必填项', trigger: 'blur' }],
  gitRepository: [
    { required: true, message: 'gitRepository为必填项', trigger: 'change' },
  ],
  desc: [{ required: true, message: 'desc为必填项', trigger: 'blur' }],
  people: [{ required: true, message: 'people为必填项', trigger: 'blur' }],
  status: [{ required: true, message: 'status为必填项', trigger: 'change' }],
})
const formRef = ref()

// 获取详情信息
const getDetailInfo = async () => {
  try {
    const {
      status,
      data: { message, result: res },
    } = await requestByDetail({ id: +route.query.id })
    if (status === 200) {
      // form.value = res
      const formKeys = Object.keys(form.value)
      formKeys.forEach(key => (form.value[key] = res[key]))
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
if (isAdd.value) {
  breadcrumbList.value = ['项目管理', '新增项目']
} else {
  // 详情页代表需要调用接口获取当前信息
  getDetailInfo()
}

// 新增
const add = async () => {
  try {
    const {
      status,
      data: { message, result: res },
    } = await requestByAdd(form.value)
    if (status === 200) {
      ElMessage({
        type: 'success',
        message: message,
        showClose: true,
        center: true,
        grouping: true,
      })
      router.push({ name: 'projectList' })
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

// 修改
const edit = async () => {
  console.log(22222222222)
  try {
    const {
      status,
      data: { message, result: res },
    } = await requestByEdit({
      ...form.value,
      id: +route.query.id,
    })
    if (status === 200) {
      ElMessage({
        type: 'success',
        message: message,
        showClose: true,
        center: true,
        grouping: true,
      })
      router.push({ name: 'projectList' })
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

const submitForm = () => {
  formRef.value.validate(valid => {
    if (valid) {
      // form校验通过的逻辑
      if (isAdd.value) {
        add()
      } else {
        edit()
      }
    } else {
      // form校验未通过的逻辑
      return false
    }
  })
}
</script>

<template>
  <div class="projectDetail">
    <breadcrumb :breadcrumb-list="breadcrumbList" />

    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      class="myForm"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="项目名称：" prop="name">
        <el-input clearable v-model="form.name" />
      </el-form-item>

      <!-- 这个地方有问题， 新增的话有问题 -->
      <el-form-item label="所属git库" prop="gitRepository">
        <el-select v-model="form.gitRepository" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="简介" prop="desc">
        <el-input clearable v-model="form.desc" type="textarea" />
      </el-form-item>

      <el-form-item label="维护人员" prop="people">
        <el-input clearable v-model="form.people" type="textarea" />
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="USE">使用中</el-radio>
          <el-radio label="UNUSE">已弃用</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="info" @click="submitForm">
          {{ isAdd ? '新增' : '修改' }}
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
