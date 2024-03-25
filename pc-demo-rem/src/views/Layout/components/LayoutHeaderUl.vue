<script setup>

</script>


<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <li> <RouterLink to="/">关于我们</RouterLink> </li>
    <li> <RouterLink to="/">产品展示</RouterLink> </li>
    <li> <RouterLink to="/">服务案例</RouterLink> </li>
  </ul>
</template>


<style lang="scss">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 68px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: red;
        border-bottom: 1px solid red;
      }
    }

    .active {
      color: red;
      border-bottom: 1px solid red;
    }
  }
}
</style>