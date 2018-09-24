<template>
  <section class="section is-header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            Inbox
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-link" to="/">Home</router-link>
            <router-link class="navbar-link" to="/about">About</router-link>
            <router-link class="navbar-link" to="/inbox">Inbox</router-link>
            <!-- <router-link class="navbar-link" to="/inbox">List Emails</router-link> -->
            <!-- <router-link class="navbar-link" to="/inbox/new">New Email</router-link> -->
          </div>

          <div class="navbar-end">
            <slot></slot>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>