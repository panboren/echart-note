<template>
  <div>
    <h1>欢迎来到列表页面 list</h1>
    <ListItem></ListItem>
    <div v-focus>focus</div>
    <strong> 姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }} </strong>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'
const userInfo = useUserStore().userInfo
// console.log(userInfo);
</script>
