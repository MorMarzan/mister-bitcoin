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
import { RouterView } from "vue-router"

export default {
  data() {
    return {
      filterBy: { txt: "" },
    }
  },
  methods: {
    async removeContact(contactId) {
      try {
        this.$store.dispatch({ type: 'removeContact', contactId })
        eventBus.emit("user-msg", { txt: `Deleted ${contactId}` })
      } catch (err) {
        console.error(err)
        eventBus.emit("user-msg", { txt: 'Problem deleting contact' })
      }
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
    contacts() {
      return this.$store.getters.contacts
    }
  },
  async created() {
    try {
      await this.$store.dispatch({ type: 'loadContacts' })
    } catch (err) {
      console.error(err)
      eventBus.emit("user-msg", { txt: 'Problem getting contacts' })
    }
  },
  components: {
    ContactList,
    ContactFilter,
    RouterView
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
