<template>
  <div class="container">
    <form  @submit="handleValidation">
      <div class="field">
        <label for="title" class="label">Title</label>
        <input type="text" :class="titleInputClass" v-model="newMail.title" required />
        <p class="help is-danger" v-if="fieldErrors.title">{{ fieldErrors.title }}</p>
      </div>
      <div class="field">
        <label for="body" class="label">Body</label>
        <textarea name="body" id="" cols="30" rows="10" :class="bodyInputClass" required v-model="newMail.body"></textarea>
        <p class="help is-danger" v-if="fieldErrors.body">{{ fieldErrors.body }}</p>
      </div>
      <div class="field">
        <div class="control">
          <button class="button" v-if="isNewMailLoading" disabled>Submitting...</button>
          <button type="button" @click="handleValidation" class="button" v-else>Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'InboxForm',
  computed: {
    ...mapGetters(['newMail', 'isNewMailLoading', 'fieldErrors']),
    titleInputClass() {
      if (this.fieldErrors.title) {
        return "input is-danger";
      }
      return "input";
    },
    bodyInputClass() {
      if (this.fieldErrors.body) {
        return "textarea is-danger";
      }
      return "textarea";
    }
  },
  methods: {
    ...mapActions(['handleSubmit']),
    ...mapMutations(['setNewMailFields']),

    async handleValidation(evt) {
      evt.preventDefault();
      const errors = {};
      if (!evt.target.form[0].validity.valid) {
        errors.title = evt.target.form[0].validationMessage;
      }
      if (!evt.target.form[1].validity.valid) {
        errors.body = evt.target.form[1].validationMessage;
      }
      this.setNewMailFields({ fieldErrors: errors });
      if (evt.target.form.checkValidity()) {
        const mail = await this.handleSubmit(this.newMail);
        this.$router.push ('/inbox');
      }
      // evt.preventDefault();
    }
  }
}
</script>
