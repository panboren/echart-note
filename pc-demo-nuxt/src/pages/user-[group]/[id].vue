<template>
  <NuxtLayout name="header" />
  <div>
    <h1>页面 user-[group]/ [id]</h1>
    <div>route.params : {{ route.params }}</div>
  </div>

  <div>vueuse 坐标: {{ x }}, {{ y }}</div>
</template>
<script setup lang="ts">
// 禁用默认的 layout
definePageMeta({
  layout: false
})

const route = useRoute()
console.log(route.params)

// 使用 vueuse
const { x, y } = useMouse()
</script>
