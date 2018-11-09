import Vue from 'vue'
import Router from 'vue-router'
import importByFile from '../util/import-by-file'

Vue.use(Router)

var routes = importByFile(require.context('../modules/', true, /\.js$/), 'Router.js')

const router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: routes
})

router.beforeEach((to, from, next) => {

  if (!to.meta || !to.meta.unrequiredAuth || to.meta.unrequiredAuth == "false" || to.unrequiredAuth === "false") {
    const serialized = localStorage.getItem('authorization')
    if (!serialized || serialized == "false" || serialized === "false") {
      localStorage.setItem('rollback-uri', to.fullPath)
      next('/login')
    } else {
      next()
    }
  }
  next()
})
export default router
