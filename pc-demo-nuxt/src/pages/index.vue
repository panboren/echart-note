<template>
  <div>
    <h1>index页面1</h1>
    <div>
      <NuxtLink to="/list">进入列表页</NuxtLink>
    </div>
     <div>
       <NuxtLink to="/page1">进入page1页</NuxtLink>
     </div>
     <div>
       <NuxtLink to="/user-admin/111">进入user-admin页面</NuxtLink>
     </div>
    <el-row class="mb-4">
      <el-button @click="getData">Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script setup>

// const foo = useFoo()
import {useApi} from '../composables/api.ts'
const {homeApi} = useApi()
let index = 1
const getData = async ()=>{
  index ++
  let name = index % 2 ? '芋道源码' + index : '芋道源码'
  let res = await homeApi.getTenantIdByName(name)
  console.log(111159, res)
}
// getData()

</script>
