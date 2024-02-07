<template>
  <section class="contact-preview">
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      // type: Object,
      // required: true,
    },
  },
  async created() {

  }
}
</script>

<style lang="scss"></style>