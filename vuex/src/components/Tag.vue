<template>
  <div class="tags has-addons">
    <span class="tag is-info">{{ text }}</span>
    <a class="tag is-delete" @click="handleDelete(name)"></a>
  </div>
</template>
<script>
export default {
  name: 'Tag',
  props: {
    text: String,
    name: String,
    handleDelete: Function,
  }
}
</script>
