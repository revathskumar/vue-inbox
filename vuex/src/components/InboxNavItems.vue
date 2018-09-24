<template>
  <div class="navbar-end">
    <!-- navbar items -->
    <router-link class="navbar-link" to="/inbox">List Emails</router-link>
    <router-link class="navbar-link" to="/inbox/new">New Email</router-link>
  </div>
</template>

<script>
export default {
  name: 'InboxNavItems'
}
</script>
