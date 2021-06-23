import Vue from 'vue'
import Router from 'vue-router'
import ListProducts from '@/components/ListProducts'
import Product from '@/components/Product'

const axios = require('axios').default;

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ListProducts',
      component: ListProducts
    },
    {
      path: '/product/:id',
      props: true,
      name: 'Product',
      component: Product
    },
  ]
})
