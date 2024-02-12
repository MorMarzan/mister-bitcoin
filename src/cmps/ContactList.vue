<template>
  <section class="contact-list">
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <div class="btn-container">
          <button @click="onRemoveContact(contact._id)">x</button>
          <RouterLink :to="`/contact/${contact._id}`"><button>Details</button></RouterLink>
          <RouterLink :to="`/contact/edit/${contact._id}`"><button>Edit</button></RouterLink>
        </div>
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
}
</script>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";

.contact-list ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: unset;
  margin-block-end: 10px;

  li {
    padding: 10px;
    border: 1px solid #79C8C7;
    border-radius: 20px;
    display: grid;
    align-content: space-between;

    .btn-container {
      display: grid;
      grid-auto-flow: column;
      justify-content: start;
      gap: 5px;
    }
  }
}
</style>