<template>
  <div class="mdl-grid">
    <div class="title mdl-cell mdl-cell--12-col">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.title {
  font-size: 25px;
}
</style>
