<template>
  <nav class="level">
    <!-- Left side -->
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>Filters</strong>
        </p>
      </div>
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="Find a post" v-model="filters.fields.q">
          </p>
          <p class="control">
            <button class="button" @click="handleFilter({ q: filters.fields.q })">
              Search
            </button>
          </p>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <select name="type" id="" v-model="filters.fields.type" @change="handleFilter({ type: filters.fields.type })">
        <option value="all">All</option>
        <option value="published">Published</option>
        <option value="drafts">Drafts</option>
        <option value="deleted">Deleted</option>
      </select>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'InboxFilter',
  props: {
    handleFilter: Function
  },
  computed: {
    ...mapState(['filters']),
  },
  methods:{
    ...mapMutations(['setAppliedFilters', 'setFilterFields']),
  }
}
</script>
