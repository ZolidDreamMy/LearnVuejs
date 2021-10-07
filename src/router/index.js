/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ViewFeed from '../views/feed/ViewFeed.vue'
import CreateFeed from '../views/feed/CreateFeed.vue'
import UpdateFeed from '../views/feed/UpdateFeed.vue'
import DetailFeed from '../views/feed/DetailFeed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/feed',
    name: 'ViewFeed',
    component: ViewFeed
  },
  {
    path: '/feed/create',
    name: 'CreateFeed',
    component: CreateFeed
  },
  {
    path: '/feed/update/:feedId',
    name: 'UpdateFeed',
    component: UpdateFeed
  },
  {
    path: '/feed/detail',
    name: 'DetailFeed',
    component: DetailFeed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
