<template>
  <el-config-provider :locale="locale">
    <router-view
      v-if="$route.meta.keepAlive"
      v-slot="{ Component }"
      :key="$route.path"
    >
      <transition
        name="keepAlive-view-transition"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <!--正常的访问走下面-->
    <router-view
      v-if="!$route.meta.keepAlive"
      v-slot="{ Component }"
    >
      <transition
        name="keepAlive-view-transition2"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </el-config-provider>
</template>
<script setup>
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import locale from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}

.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

/* Fading entrances  */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.animate__fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}


/* Fading exits */
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.animate__fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
</style>
