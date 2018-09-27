<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>Applied Filters </strong>
        </p>
      </div>
      <div class="level-item">
        <tag v-for="filter in appliedFilters" :handleDelete="handleDelete" v-if="filter.text" :text="filter.text" :key="filter.key" :name="filter.key"></tag>
      </div>
    </div>
  </nav>
</template>
<script>
import Tag from "@/components/Tag";
import { mapState } from 'vuex';

export default {
  name: 'AppliedFilters',
  components: {
    Tag
  },
  props: {
    appliedFilters: {
      type: Array,
      default: []
    },
    handleDelete: Function
  },
}
</script>
