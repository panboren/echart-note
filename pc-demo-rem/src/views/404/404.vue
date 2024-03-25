<template>
  <el-container style="height: 100%">
    <el-main>
      <div class="flex items-center justify-center h-100%">
        <el-empty description="没有找到页面 -- 404" />
        <div class="go-to">
          <el-button @click="go">
            返回首页
          </el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const go = router.replace('/')
</script>
<style scoped lang="scss">
.go-to {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
}
</style>
