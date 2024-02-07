<script>
import { userService } from '@/services/user.service'
import { bitcoinService } from '@/services/bitcoin.service'

export default {
    data() {
        return {
            currUser: null,
            rate: null
        }
    },
    async created() {
        this.currUser = userService.get()
        this.rate = await bitcoinService.getRate()
    }
}
</script>

<template>
    <main>
        <h1>Home</h1>
        <div v-if="currUser" class="user-greeting">
            <p>Hello {{ currUser.name }}</p>
            <p>Your balance is {{ currUser.balance }}$</p>
            <p v-if="rate">Bitcoin to USD rate is {{ rate }}</p>
        </div>
    </main>
</template>
