<template>
  <el-container
    class="container"
    style="height: 100%"
  >
    <el-main>
      <div style="margin-bottom: 20px;">
        切换主题
        <el-button
          type="primary"
          @click="changeTheme('light')"
        >
          light
        </el-button>
        <el-button
          type="primary"
          @click="changeTheme('dark')"
        >
          dark
        </el-button>
      </div>
      <div>
        xss

        <div
          v-xss="xssValue"
          style="margin-bottom: 20px;"
        />
      </div>
      <hello-world />
      <div>{{ total }}</div>
      <el-button
        type="primary"
        @click="add"
      >
        添加
      </el-button>
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
      <el-input
        v-model="input"
        placeholder="Please input"
      />
      <div>
        <el-button @click="show = !show">
          Click Me
        </el-button>

        <div style="display: flex; margin-top: 20px; height: 100px">
          <transition name="el-zoom-in-center">
            <div
              v-show="show"
              class="transition-box"
            >
              .el-zoom-in-center
            </div>
          </transition>

          <transition name="el-zoom-in-top">
            <div
              v-show="show"
              class="transition-box"
            >
              .el-zoom-in-top
            </div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div
              v-show="show"
              class="transition-box"
            >
              .el-zoom-in-bottom
            </div>
          </transition>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import HelloWorld from './components/hello-world/hello-world.vue'
import {useTheme} from '../../hooks/useTheme'
const input = ref('')
const show = ref(true)
const {theme} = useTheme()
let xssValue = ref('<img src="img1">a<img src="img2">b<img src="img3">c<img src="img4">')

setTimeout(()=>{
  xssValue.value = '<div>alert("xss");</div>'
}, 5000)
const changeTheme = (val)=>{
  theme.value = val
}

let total = ref(0)
const add = () => {
  total.value++
}

</script>
<style scoped lang="scss">
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.container{
  background: var(--bg-color);
}
//:deep(.el-input__inner){
//  background: green;
//}
</style>
