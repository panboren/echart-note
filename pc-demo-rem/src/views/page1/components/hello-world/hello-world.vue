<template>
  <div class="greetings">
    <h1 class="green">
      page1-hello-world
    </h1>
    <img
      style="width: 100px; height: 100px"
      :src="url"
      alt=""
    >
    <img
      style="width: 100px; height: 100px"
      :src="url2"
      alt=""
    >
    <img
      style="width: 100px; height: 100px"
      :src="url3"
      alt=""
    >
  </div>
</template>
<script setup>
import { getImageUrl } from '@utils'
let url = getImageUrl('img')
import url3 from './image/img_1.png'
const getImageUrl2 = (name, type = 'png') => {
  return new URL(`./image/${name}.${type}`, import.meta.url).href
}
let url2 = getImageUrl2('img')
</script>
<style scoped>
@import 'hello-world.scss';
</style>
