<template>
  <div id="inbox">
    <title title="All Mails"></title>
    <div v-if="$loadingAsyncData" class="mdl-spinner mdl-js-spinner is-active"></div>
    <list v-if="!$loadingAsyncData" :mails="mails"></list>
  </div>
</template>

<script>
/* global fetch */
import Title from './components/Title'
import List from './components/List'

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
          resolve({mails})
        })
    })
    .catch(err => {
      console.log(err)
    })
  },
  components: {
    Title,
    List
  }
}
</script>
