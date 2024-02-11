<template>
  <section v-if="contact" class="contact-details flex align-center">
    <img :src="imgSrc">
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
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
  computed: {
    imgSrc() {
      return `https://robohash.org/${this.contact._id}?set=set5`
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
  flex-direction: column;

  padding: 10px;

  img {
    max-width: 170px;
    margin-block: 20px;
  }

  a {
    align-self: end;
  }
}
</style>