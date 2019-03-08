import Vue from 'vue'
import Router from 'vue-router'
import BaseCardComponent from '@/components/BaseCardComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseCardComponent',
      component: BaseCardComponent
    }
  ]
})
