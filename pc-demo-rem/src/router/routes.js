export const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'home' },
    redirect: '/page1'
  },
  {
    path: '/page1',
    name: 'page1',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { title: 'page1' },
    component: () => import('../views/page1/page1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { title: 'page2' },
    component: () => import('../views/page2/page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    meta: { title: 'page3' },
    component: () => import('../views/page3/page3.vue')
  },
  {
    path: '/page4',
    name: 'page4',
    meta: { title: 'page4' },
    component: () => import('../views/page4/page4.vue')
  },
  {
    path: '/page5',
    name: 'page5',
    meta: { title: 'page5' },
    component: () => import('../views/page5/page5.vue')
  },
  {
    path: '/page6',
    name: 'page6',
    meta: { title: 'page6' },
    component: () => import('../views/page6/page6.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: { title: 'page6' },
    component: () => import('../views/test/test.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('../views/404/404.vue')
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]
