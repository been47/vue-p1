import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Contents from '@/views/Contents'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page,
      children: [
        {
          path: '/contents',
          name: 'Contents',
          redirect: {name: 'Quill'},
          children: [
            {
              path: '/contents/quill',
              name: 'Quill',
              component: Contents
            }
          ]
        }
      ]
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
