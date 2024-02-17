<template>
  <section v-if="contact" class="contact-details flex align-center">
    <img v-show="imgLoaded" @load="imgLoaded = true" :src="imgSrc" :alt="`${contact.name} image`">
    <img v-if="!imgLoaded" class="loader" src="/images/puff.svg" alt="loader" />
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.email }}</p>
    <p>{{ contact.phone }}</p>

    <div class="transfer-wrapper">
      <TransferFunds v-if="currUser" :contact="contact" :balance="currUser.balance" @transfer="transfer" />
      <RouterLink v-else to="/">Signup to transfer bitcoins to {{ contact.name }}</RouterLink>
    </div>

    <TransactionList v-if="transactions?.length" :transactions="transactions" />

    <RouterLink to="/contact" class="back"><button>Back</button></RouterLink>
  </section>
</template>

<script>
import TransactionList from "@/cmps/TransactionList.vue"
import TransferFunds from "@/cmps/TransferFunds.vue"
import { contactService } from "@/services/contact.service"
import { userService } from "@/services/user.service"
import { eventBus } from "@/services/eventBus.service.js"

export default {
  data() {
    return {
      contact: null,
      imgLoaded: false,
      transactions: null
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
    },
    getTransactions() {
      try {
        this.transactions = userService.getTransactions(this.contact._id)
      } catch (err) {
        console.error(err)
        eventBus.emit("user-msg", { txt: 'Problem getting transactions' })
      }
    }
  },
  async created() {
    this.imgLoaded = false
    const { contactId } = this.$route.params
    this.contact = await contactService.get(contactId)
    if (this.currUser) this.getTransactions()
  },
  components: { TransferFunds, TransactionList },
}
</script>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";

.contact-details {
  flex-direction: column;

  padding: 20px;

  .transfer-wrapper {
    border-block-start: 5px double $clrPrimary2;
    margin-block-start: 30px;
    padding-block-start: 30px;
  }

  img {
    max-width: 170px;
    margin-block-end: 20px;
  }

  .back {
    align-self: end;
    margin-block-start: auto;
  }
}
</style>