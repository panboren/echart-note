# 项目模板 

```sh

 vite +  vue3 + element-plus + rem (amfe-flexible postcss-pxtorem) + eslint
 vue-router + pinia +  axios
 
```
## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
pnpm dev:test
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
   eslint 必须开起来,不能禁止
```

```sh
pnpm lint
```

# git 代码
```sh

开发环境：dev 
测试环境：test
预发环境：pre
生产环境：master  
基于上面四个拉自己的分支  feature-名字-时间-功能标记 = > dev-pbr-20231124-login

```

# 环境

```sh
    "dev": "vite",  // 开发环境  .env.development
    "dev:test": "vite --mode test", // 测试环境 .env.test
    "dev:pre": "vite --mode pre", // 预发布环境  .env.pre
    "build:test": "vite build --mode test", // 测试环境 .env.test
    "build:pre": "vite build --mode pre", // 预发布环境   .env.pre
    "build": "vite build", // 生产环境  .env.production
```

# 文件目录

```sh
├─ api          # api文档
├─ assets       # 全局样式、图片
├─ components   # 全局组件
├─ directive    # 指令
├─ hooks        # hooks
├─ router       # 路由 router
├─ stores       # pinia 状态管理
├─ utils        # 工具 api
├─ views        # 页面文件
└─ main         # 入口文件

xxx.vue 文件 禁止用 index.vue  vue-tools不识别  文件夹和.vue命名一致 最好加上md文件

```

# rem 适配
```sh

// rem匹配插件
import 'amfe-flexible'
postcssPxtorem({
          rootValue: 192,// 按照自己的设计稿修改 1920/10
          unitPrecision: 5,// 保留到5位小数
          selectorBlackList: ['ignore'], // 忽略转换正则匹配项
          propList: ['*'],
          replace: true,
          mediaQuery: false,
          minPixelvalue: 0
        })

```

# element ui 组件会自动导入 直接 html上面写 <el-button />

```sh
<template>
  <el-container style="height: 100%" >
    <el-main>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-main>
  </el-container>
</template>
<script setup>

</script>
<style scoped>

</style>

```

# element ui icon会自动导入 直接 html上面写 （i-ep-图标名称）
```sh
<template>
  <el-container style="height: 100%">
    <el-main>
      <i-ep-plus />
      <i-ep-loading />
      <i-ep-setting />
    </el-main>
  </el-container>
</template>
<script setup>

</script>
<style scoped>

</style>
```

# 全局的组件(components文件夹)会自动导入 直接 html上面写  <hello-world />
```sh
<template>
  <el-container style="height: 100%">
    <el-main>
      <hello-world />
    </el-main>
  </el-container>
</template>
<script setup>   

</script>
<style scoped>

</style>
```

```sh
   全局组件把 md文件写上去和案例代码
     xf-table-list.vue
     表格.md
```


# vue,vue-router等组合api 自动导入 let total = ref(0)
```sh
<template>
  <el-container style="height: 100%">
    <el-main>
      <div>{{ total }}</div>
      <el-button type="primary" @click="add">
        添加
      </el-button>
    </el-main>
  </el-container>
</template>

<script setup>
let total = ref(0)
const add = ()=>{
  total.value ++
}
</script>
<style scoped>

</style>

```

#  预防xss

```sh
   v-xss="xssValue"
```

# element ui 主题样式覆盖  src/assets/css/element/index.scss

# 主题 样式配置 dark/light

```sh
   文件 import './assets/css/theme/index.scss'
   dark 在 src/assets/css/dark.scss 
   light 在 src/assets/css/light.scss 
   // 切换主题
   const {theme} = useTheme()
```


# 出于性能原因，更加推荐你在类名下添加自定义 css 变量，而不是在全局的 :root 下
```sh

.el-input {
  --el-input-bg-color: #ccc;
  --el-input-text-color: green
}

```


# 开发规范

```sh

1 文件/组件名 用 '-'  
   hello-world
 
2 组件和样式分离
  hello-world.scss
  hello-world.vue
  
3 变量:小写驼峰
   let myMane = ''
 
4 常量:大写
   let MXA_NUMBER = 1000
   
5 单文件组件引用
   // 使用 '-'
   <hello-world />
   // 引入使用驼峰
  import HelloWorld from '@components/hello-world/hello-world.vue'

6 样式穿透 禁忌用  !important

:deep(.el-input__inner){
  background: green;
}

7 用setup 来写



```
