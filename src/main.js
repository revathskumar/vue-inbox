import Vue from 'vue'
import App from './App'
import All from './All'
import Root from './Root'
import Inbox from './Inbox'
import Drafts from './Drafts'
import SentItems from './SentItems'
import VueRouter from 'vue-router'
import VueAsyncData from 'vue-async-data'

import 'material-design-lite/material.css'
import 'material-design-lite/material.min.js'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueRouter)
Vue.use(VueAsyncData)

const router = new VueRouter()

router.map({
  '/': {
    component: Root
  },
  '/inbox': {
    component: Inbox
  },
  '/drafts': {
    component: Drafts
  },
  '/sent': {
    component: SentItems
  },
  '/all': {
    component: All
  }
})

/* eslint-disable no-new */
router.start(App, '#app')
