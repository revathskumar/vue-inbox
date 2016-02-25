<template>
  <ul class='mdl-list'>
    <li class="mdl-list__item mdl-list__item--three-line" v-for="mail in mails">
      <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>{{ mail.subject }}</span>
        <span class="mdl-list__item-text-body">
          {{ mail.body }}
        </span>
      </span>
      <span class="mdl-list__item-secondary-content">
        <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['mails']
}
</script>
