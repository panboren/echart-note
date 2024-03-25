<template>
  <el-container style="height: 100%">
    <xf-select-search
      v-model="selectValue"
      :api="textSelect"
      label-key="label"
      value-key="value"
      @change="change"
    />
  </el-container>
</template>
<script setup>
import {textSelect} from '@api/home'
let selectValue = ref([])

let change = (item)=>{
  console.log(item)
}
</script>
<style scoped></style>






