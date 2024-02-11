<template>
  <form v-if="contact" @submit.prevent="onSaveContact" class="contact-edit">
    <label for="name">Name</label>
    <input type="text" v-model="contact.name" id="name" />

    <label for="phone">Phone</label>
    <input type="tel" v-model="contact.phone" id="phone" />

    <label for="email">Email</label>
    <input type="email" v-model="contact.email" id="email" />

    <div class="actions">
      <RouterLink to="/contact"><button type="button">Cancel</button></RouterLink>
      <button>Save</button>
    </div>
  </form>
</template>

<script>
import { contactService } from "@/services/contact.service"
import { eventBus } from "@/services/eventBus.service"

export default {
  data() {
    return {
      contact: null,
    }
  },
  methods: {
    async onSaveContact() {
      const contact = await contactService.save(this.contact)
      this.$router.push("/contact")
      eventBus.emit("user-msg", { txt: `${contact.name} saved` })
    },
  },
  async created() {
    const { contactId } = this.$route.params

    if (contactId) {
      this.contact = await contactService.get(contactId)
    } else {
      this.contact = contactService.getEmptyContact()
    }
  },
}
</script>

<style lang="scss">
.contact-edit {
  display: grid;
  gap: 10px;
  place-items: start;
  align-content: start;
  padding: 10px;
  margin-block: 10px;

  .actions {
    justify-self: end;
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  }
}
</style>