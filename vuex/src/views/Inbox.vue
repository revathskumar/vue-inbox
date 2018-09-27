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
          <inbox-filter :handleFilter="handleFilter"></inbox-filter>
          <applied-filters :handleDelete="handleFilterDelete" :appliedFilters="appliedFilters" v-if="appliedFilters.length > 0"></applied-filters>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

import InboxFilter from "@/components/InboxFilter";
import AppliedFilters from "@/components/AppliedFilters";

export default {
  name: 'Inbox',
  components: {
    InboxFilter,
    AppliedFilters,
  },
  computed: {
    ...mapGetters(['getInboxMails', 'isInboxLoading', 'getInboxError']),
    ...mapState(['filters']),
    appliedFilters() {
      return Object.keys(this.filters.appliedFilters)
        .map(key =>{
          return {
            key,
            text: this.filters.appliedFilters[key]
          }
        })
    }
  },
  methods: {
    ...mapActions(['fetchMails']),
    ...mapMutations(['setAppliedFilters', 'setFilterFields', 'setFilter']),
    handleFilter(query) {
      this.$router.push({ path: '/inbox', query: {...this.$route.query, ...query} });
    },
    handleFilterDelete(name) {
      const query = {
        ...this.$route.query,
      };
      delete query[name];

      this.$router.push({ path: '/inbox', query });
    },
  },
  created() {
    this.setFilter({ key: 'appliedFilters', value: this.$route.query});
    this.setFilter({ key: 'filters', value: this.$route.query });
    this.fetchMails(this.$route.query);
  },
  watch: {
    '$route': 'fetchMails'
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate :: ', to, from);
    this.setFilter({ key: 'appliedFilters', value: to.query});
    this.setFilter({ key: 'filters', value: to.query});
    next();
  }
};
</script>
