<template>
  <section v-if="contact" class="contact-details">
    <img v-if="comtactImg" :src="comtactImg">
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
      comtactImg: null
    }
  },
  async created() {
    const { contactId } = this.$route.params
    this.contact = await contactService.get(contactId)
    this.comtactImg = `https://robohash.org/${this.contact._id}?set=set5`
    console.log(this.comtactImg)
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