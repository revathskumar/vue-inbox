<template>
  <div id="inbox">
    <vtitle title="Inbox"></vtitle>
    <div v-if="loading" class="mdl-spinner mdl-js-spinner is-active"></div>
    <list v-if="!loading" :mails="mails"></list>
    <create></create>
  </div>
</template>

<script>
/* global fetch */

import List from './components/List'
import Create from './components/Create'
import Vtitle from './components/Vtitle'

export default {
  data () {
    return {
      mails: [],
      loading: true,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      fetch('https://output.jsbin.com/vutiqi.json')
      .then(res => {
        return res.json()
      })
      .then(mails => {
        this.loading = false
        this.mails = mails.filter(mail => {
          return mail.label.indexOf('inbox') >= 0
        })
      })
      .catch(err => {
        this.error = err.toString()
      })
    }
  },
  components: {
    List,
    Create,
    Vtitle
  }
}
</script>
