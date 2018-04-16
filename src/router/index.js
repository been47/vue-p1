import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Content from '@/components/Content'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    }
  ]
})
