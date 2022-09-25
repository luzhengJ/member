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
    name:'index',
    component:() => import("../layout"),
    children:[
      {
        path:"index",
        name:"index",
        component: () => import("../views/index")
      },
      {
        path:"member",
        name:"member",
        component: () => import("../views/member")
      },
      {
        path:"supplier",
        name:"supplier",
        component: () => import("../views/supplier")
      },
      {
        path:"goods",
        name:"goods",
        component: () => import("../views/goods")
      },
      {
        path:"staff",
        name:"staff",
        component: () => import("../views/staff")
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
