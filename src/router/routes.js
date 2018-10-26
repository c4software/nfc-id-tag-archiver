export default [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    {
        path: '/nfc',
        name: 'nfc',
        component: () => import('../views/Nfc')
      },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History')
    },
]