// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt'
  ],
  nitro: {
    // devProxy: {
    //   '/api': {
    //     target: 'http://localhost:3001', // 这里是接口地址
    //     changeOrigin: true,
    //     prependPath: true
    //   }
    // }
  },
  css: ['normalize.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'
        }
      }
    }
  }
  // elementPlus: { /** Options */ }

})
