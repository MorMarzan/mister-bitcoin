<template>
  <section v-if="contacts" class="contact-index main-layout full">
    <ContactFilter @filter="filterContacts" />
    <RouterLink class="add" to="contact/edit"><button>Add a Contact</button></RouterLink>
    <ContactList @remove="removeContact" :contacts="filteredContacts" />
  </section>
  <img v-else class="loader" src="/images/puff.svg" alt="" />
</template>


<script>
import { contactService } from "../services/contact.service.js"
import { eventBus } from "@/services/eventBus.service.js"

import ContactList from "../cmps/ContactList.vue"
import ContactFilter from "../cmps/ContactFilter.vue"

export default {
  data() {
    return {
      contacts: null,
      filterBy: { txt: "" },
    }
  },
  methods: {
    async removeContact(contactId) {
      await contactService.remove(contactId)

      const idx = this.contacts.findIndex(
        (contact) => contact._id === contactId
      )
      this.contacts.splice(idx, 1)
      eventBus.emit("user-msg", { txt: `Deleted ${contactId}` })
    },
    filterContacts(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, "i")
      return this.contacts.filter((contact) => regex.test(contact.name))
    },
  },
  async created() {
    this.contacts = await contactService.query()
  },
  components: {
    ContactList,
    ContactFilter,
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";
@import "@/assets/styles/setup/mixins.scss";

.loader {
  display: block;
  width: 200px;
  margin: 100px auto;
}

.contact-index {
  place-content: start;

  .add {
    margin-block-end: 10px;
    display: block;
    justify-self: start;

    button {

      @include button-style($bgColor: $clrSecondary-1);
    }

  }
}
</style>
