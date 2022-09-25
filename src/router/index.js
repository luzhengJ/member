import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/login')
  },
  {
    path:'/',
    name:'layout',
    redirect:"/index",
    component:() => import("../layout"),
    children:[
      {
        path:"index",
        name:"index",
        component: () => import("../views/index"),
        meta:{
          "title":"首页"
        }
      },
      {
        path:"member",
        name:"member",
        component: () => import("../views/member"),
        meta:{
          "title":"会员管理"
        }
      },
      {
        path:"supplier",
        name:"supplier",
        component: () => import("../views/supplier"),
        meta:{
          "title":"供应商管理"
        }
      },
      {
        path:"goods",
        name:"goods",
        component: () => import("../views/goods"),
        meta:{
          "title":"商品管理"
        }
      },
      {
        path:"staff",
        name:"staff",
        component: () => import("../views/staff"),
        meta:{
          "title":"员工管理"
        }
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
