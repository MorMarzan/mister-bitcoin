<template>
  <section v-if="contact" class="contact-details">
    <!-- <img :src=`https://robohash.org/${contact.name}?set=set5`> -->
    <h2>{{ contact.name }}</h2>
    <h2>{{ contact.email }}</h2>
    <h2>{{ contact.phone }}</h2>
    <RouterLink to="/contact"><button>Back</button></RouterLink>
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service"
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const { contactId } = this.$route.params
    this.contact = await contactService.get(contactId)
  },
}
</script>

<style lang="scss">
.contact-details {
  display: flex;
  flex-direction: column;

  padding: 10px;
  background-color: rgb(236, 186, 92);

  a {
    align-self: end;
  }
}
</style>