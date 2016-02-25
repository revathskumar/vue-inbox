import Vue from 'vue'
import App from './App'
import Inbox from './Inbox'
import Drafts from './Drafts'
import SentItems from './SentItems'
import All from './All'
import VueRouter from 'vue-router'

import 'material-design-lite/material.css'
import 'material-design-lite/material.min.js'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/': {
    component: Inbox
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
