<template>
  <div>
    <nav-bar>
      <inbox-nav-items v-if="isInboxRoute"></inbox-nav-items>
    </nav-bar>
    <section class="hero">
      <div class="container">
        <router-view/>
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import InboxNavItems from "./components/InboxNavItems";

export default {
  components: {
    NavBar,
    InboxNavItems
  },
  computed:{
    isInboxRoute() {
      return this.$route.path.indexOf('/inbox') === 0;
    }
  }
}
</script>


<style lang="scss">
@import '../node_modules/bulma/bulma.sass';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
