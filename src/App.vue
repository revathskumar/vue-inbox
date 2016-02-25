<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Vue Mail</span>
    <nav class="mdl-navigation">
      <a v-link="{ path: '/inbox' }" class="mdl-navigation__link" href="#inbox"> Inbox </a>
      <a v-link="{ path: '/drafts' }" class="mdl-navigation__link" href="#drafts"> Drafts </a>
      <a v-link="{ path: '/sent' }" class="mdl-navigation__link" href="#sent"> Sent Items </a>
      <a v-link="{ path: '/all' }" class="mdl-navigation__link" href="#all"> All Mails </a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <router-view></router-view>
  </main>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>
