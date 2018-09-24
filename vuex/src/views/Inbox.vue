<template>
  <section class="hero">
    <!-- <div class="container is-fluid"> -->
      <div v-if="isInboxLoading">
        Your mails are Loading...
      </div>
      <div v-else>
        <div v-if="getInboxError.message" class="notification is-danger">
          {{ getInboxError.message }}
        </div>
        <div v-else>
          <div v-if="getInboxMails.length === 0" class="notification is-primary">
            No mails in inbox
          </div>
          <ul v-if="getInboxMails.length > 0">
            <li v-bind:key="mail.id" v-for="mail in getInboxMails">
              <div class="box">
                <div class="content">
                  <h6>{{ mail.title }}</h6>
                  <p>{{ mail.body }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    <!-- </div> -->
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Inbox',
  computed: {
    ...mapGetters(['getInboxMails', 'isInboxLoading', 'getInboxError']),
  },
  methods: {
    ...mapActions(['fetchMails']),
  },
  created() {
    this.fetchMails();
  },
  watch: {
    '$route': 'fetchMails'
  }
};
</script>
