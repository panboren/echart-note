import { createRouter, createWebHashHistory } from 'vue-router'
// 页面加载进度
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { routes } from './routes'
NProgress.configure({ showSpinner: false })
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  // 开启页面加载进度
  NProgress.start()
  document.title = to?.meta?.title || '欣锋'
  return next()
  // if (import.meta.env.MODE !== 'production') {
  //   next()
  //   return
  // }
  /* let userInfo = sessionStorage.getItem('userInfo');
  userInfo = userInfo ? JSON.parse(userInfo) : {};
  const store = useMeStore();
  if (userInfo?.userid) {
    next();
    return;
  }
  const url = window.location.href;
  const params = getCode(url) ?? {};
  if (params?.code) {
    const data = (await getCodeHttp(params?.code)) ?? {};
    if (data?.userid) {
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('userInfo', JSON.stringify(data));
      store.userInfo.value = data;
      return next();
    }
    showFailToast(`没有权限！${params} ${url} ${userInfo}`);
    return next(false);
  }
  window.open(wxUrl, '_self');*/
  // return next(false)
})

router.afterEach(() => {
  // 关闭页面加载进度
  NProgress.done()
})

export default router
