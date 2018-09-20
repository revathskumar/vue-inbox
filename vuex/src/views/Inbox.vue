<template>
  <section class="section">
    <div class="container is-fluid">
      <div v-if="mails.length === 0" class="notification is-primary">
        No mails in inbox
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Inbox',
  computed: {
    mails() {
      console.log(this.$store);
      return this.$store.state.inbox.mails;
    },
  },
};
</script>
