import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      //商品二级页面
      path: '/goods', name: 'goods', component: () => import('../views/Goods')
    }, {
      //评价二级页面
      path: '/evalute', name: 'evalute', component: () => import('../views/Evalute')
    }, {
      //商家二级页面
      path: '/merchant', name: 'merchant', component: () => import('../views/Merchant')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
