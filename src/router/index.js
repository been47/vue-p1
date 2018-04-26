import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Contents from '@/views/Contents'
import C from '@/views/C'
import D from '@/views/D'
import E from '@/views/E'
import Header from '@/components/Header'

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
            },
            {
              path: '/contents/mdata',
              name: 'Mdata',
              component: Contents
            },
            {
              path: '/contents/navigator',
              name: 'Navigator',
              component: Contents
            },
            {
              path: '/contents/vuetable',
              name: 'Vuetable',
              component: Contents
            }
          ]
        },
        {
          path: '/c',
          name: 'C',
          redirect: {name: 'Ca'},
          children: [
            {
              path: '/c/ca',
              name: 'Ca',
              component: C
            }
          ]
        },
        {
          path: '/d',
          name: 'D',
          redirect: {name: 'Da'},
          children: [
            {
              path: '/d/da',
              name: 'Da',
              component: D
            }
          ]
        },
        {
          path: '/e',
          name: 'E',
          redirect: {name: 'Ea'},
          children: [
            {
              path: '/e/ea',
              name: 'Ea',
              component: E
            }
          ]
        }
      ]
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
