<template>
  <section class="contact-preview">
    <h2>{{ contact.name }}</h2>
    <p class="email">{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.contact-preview {
  .email {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>