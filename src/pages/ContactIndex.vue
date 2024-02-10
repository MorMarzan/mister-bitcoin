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

<template>
  <main>
    <ContactFilter @filter="filterContacts" />
    <RouterLink to="contact/edit"><button>Add a Contact</button></RouterLink>
    <ContactList v-if="contacts" @remove="removeContact" :contacts="filteredContacts" />
    <img v-else src="/images/puff.svg" alt="" />
  </main>
</template>

<style lang="scss">
img {
  display: block;
  width: 200px;
  margin: 100px auto;
}
</style>
