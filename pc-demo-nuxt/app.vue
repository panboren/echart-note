<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator /> <!-- here -->
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'
const userInfo = useUserStore().userInfo
console.log(userInfo)

</script>
