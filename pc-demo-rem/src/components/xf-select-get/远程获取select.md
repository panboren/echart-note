# 配置 xf-select-get

## 参数

- showPage 展示页面
- labelKey label的key值,
- valueKey value的key值,,
- api 请求配置的api方法


# api方法

```sh
 const textSelect = () => {
return Http.get('/text-select')
}
```

# demo 代码

```sh
<template>
  <el-container style="height: 100%">
    <xf-select-get
      v-model="selectValue"
      :api="textSelect"
      label-key="label"
      value-key="value"
      @change="change"
    />
  </el-container>
</template>
<script setup>
import XfSelectGet from '@components/xf-select-get/xf-select-get.vue'
import {textSelect} from '@api/home'
let selectValue = ref('')

let change = (item)=>{
  console.log(item)
}
</script>
<style scoped></style>


```
