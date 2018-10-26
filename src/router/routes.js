export default [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History')
    },
]