<template>
  <section class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <button @click="onRemoveContact(contact._id)">x</button>
        <RouterLink :to="`/contact/${contact._id}`"
          ><button>Details</button></RouterLink
        >
        <RouterLink :to="`/contact/edit/${contact._id}`"
          ><button>Edit</button></RouterLink
        >
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("remove", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style lang="scss">
.contact-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
}
.contact-list ul li {
  padding: 10px;
  background-color: lightsteelblue;
}
</style>