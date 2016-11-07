import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import {
  Home,
  NotFound
} from './views';

const routes = [{
  path: '/',
  name: 'element',
  component: Home,
}, {
  path: '*',
  name: 'element | 404',
  component: NotFound,
}]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.afterEach((route) => {
  if (route) {
    document.title = route.name
  } else {
    document.title = '首页'
  }
})

export default router