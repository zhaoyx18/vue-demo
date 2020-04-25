import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/view/HelloWorld'

Vue.use(Router)

const routerContext = require.context(
  '@/view',
  false,
  /.vue$/
)

let router = []

routerContext.keys().forEach(filePath => {
  const file = routerContext(filePath)
  const module = file.default || file
  router.push({
    path: `/${module.name}`,
    name: module.name,
    component: module
  })
})

// 添加默认路径
router.unshift({
  path: `/`,
  redirect: 'HelloWorld'
})

export default new Router({
  routes: router
})
