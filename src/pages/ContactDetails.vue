<template>
  <section v-if="contact" class="contact-details flex align-center">
    <img v-show="imgLoaded" @load="imgLoaded = true" :src="imgSrc" :alt="`${contact.name} image`">
    <img v-if="!imgLoaded" class="loader" src="/images/puff.svg" alt="loader" />
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>
    <RouterLink to="/contact"><button>Back</button></RouterLink>

    <TransferFunds v-if="currUser" :contact="contact" :balance="currUser.balance" @transfer="transfer" />
    <RouterLink v-else to="/">Signup to transfer bitcoins</RouterLink>
  </section>
</template>

<script>
import TransferFunds from "@/cmps/TransferFunds.vue"
import { contactService } from "@/services/contact.service"
import { eventBus } from "@/services/eventBus.service.js"

export default {
  data() {
    return {
      contact: null,
      imgLoaded: false,
    }
  },
  computed: {
    imgSrc() {
      return `https://robohash.org/${this.contact._id}?set=set5`
    },
    currUser() {
      return this.$store.getters.user
    }
  },
  methods: {
    async transfer(amount) {
      try {
        this.$store.dispatch({ type: 'updateUserBalance', toContact: this.contact, amount })
        this.$router.push("/contact")
        eventBus.emit("user-msg", { txt: `Transfer to ${this.contact.name} was completed successfully` })
      } catch (err) {
        console.error(err)
        eventBus.emit("user-msg", { txt: 'Problem during transfer' })
      }
    }
  },
  async created() {
    this.imgLoaded = false
    const { contactId } = this.$route.params
    this.contact = await contactService.get(contactId)
  },
  components: { TransferFunds },
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