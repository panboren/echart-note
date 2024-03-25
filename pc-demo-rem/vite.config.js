import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// element-ui 图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import eslintPlugin from 'vite-plugin-eslint'
import postcssPxtorem from 'postcss-pxtorem'


// https://vitejs.dev/config/
export default defineConfig(( { mode,command} )=>{
  console.log('mode', mode) // production development text pre
  return  {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [
          IconsResolver({prefix: 'icon'}), // 自动导入图标组件   <i-ep-edit />
          ElementPlusResolver({importStyle: 'sass'})
        ],
        eslintrc: {
          enabled: true
        }
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'] // 自动导入图标组件   <i-ep-edit />
          }),
          ElementPlusResolver({importStyle: 'sass'})
        ],
        dirs: ['src/components'],
        dts: true
      }),
      Icons({
        autoInstall: true
      }),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
        '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url))
      }
    },

    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 8080,
      // 监听所有地址
      host: '0.0.0.0',
      // 服务启动时是否自动打开浏览器
      // open: true,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {
        /* '/new-city': {
                 target: 'http://172.16.219.251:9602/',
                 changeOrigin: true,
                 rewrite: (path) => path.replace(/^\/new-city/, ''),
               },*/
      }
    },
    css: {
      postcss: {
        plugins: [
          postcssPxtorem({
            rootValue: 192,// 按照自己的设计稿修改 1920/10
            unitPrecision: 5,// 保留到5位小数
            selectorBlackList: ['ignore'], // 忽略转换正则匹配项
            propList: ['*'],
            replace: true,
            mediaQuery: false,
            minPixelvalue: 0
          })
        ]
      },

      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/element/index.scss" as *;'
        }
      }
    }
    // build: {
    //   // 设置最终构建的浏览器兼容目标
    //   // target: 'es2015',
    //   // 构建后是否生成 source map 文件
    //   sourcemap: command === 'serve',
    //   //  chunk 大小警告的限制（以 kbs 为单位）
    //   chunkSizeWarningLimit: 3000,
    //   // 启用/禁用 gzip 压缩大小报告
    //   reportCompressedSize: false,
    //   // 清除console和debugger
    //   minify: 'esbuild',
    //   // outDir: mode || 'dis',
    //   rollupOptions: {
    //     output: {
    //       // 静态资源分类打包
    //       chunkFileNames: 'static/js/[name]-[hash].js',
    //       entryFileNames: 'static/js/[name]-[hash].js',
    //       assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
    //       manualChunks(id) {
    //         // 静态资源分拆打包
    //
    //         if (id.includes('node_modules')) {
    //           return id.toString().split('node_modules/')[1].split('/')[0].toString()
    //         }
    //       }
    //     }
    //   }
    // }
  }

})
