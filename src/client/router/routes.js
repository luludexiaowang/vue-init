const routes = [
  {
    path: '/',
    component: require('view').default,
    meta: {
      always: true
    },
    redirect: '/home/index'
  }
]

export default routes
