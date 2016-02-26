<template>
  <div id="inbox">
    <title title="Inbox"></title>
    <div v-if="$loadingAsyncData" class="mdl-spinner mdl-js-spinner is-active"></div>
    <list v-if="!$loadingAsyncData" :mails="mails"></list>
    <create></create>
  </div>
</template>

<script>
/* global fetch */

import List from './components/List'
import Create from './components/Create'
import Title from './components/Title'

export default {
  data () {
    return {
      mails: []
    }
  },
  asyncData (resolve, reject) {
    fetch('https://output.jsbin.com/vutiqi.json')
    .then(res => {
      res.json()
        .then(mails => {
          const filteredMails = mails.filter(mail => {
            return mail.label.indexOf('inbox') >= 0
          })
          resolve({mails: filteredMails})
        })
    })
    .catch(err => {
      console.log(err)
    })
  },
  components: {
    List,
    Create,
    Title
  }
}
</script>
