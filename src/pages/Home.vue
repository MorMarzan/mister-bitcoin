<template>
    <section class="home">
        <div v-if="currUser" class="user-greeting">
            <p>Hello {{ currUser.name }}</p>
            <p>Your balance is {{ currUser.balance }}$</p>
            <p v-if="rate">Bitcoin to USD rate is {{ rate }}</p>
            <button @click="_logout">Logout</button>
        </div>
        <Signup v-else @signup="_signup" />
    </section>
</template>


<script>
import { userService } from '@/services/user.service'
import { bitcoinService } from '@/services/bitcoin.service'
import Signup from '@/cmps/Signup.vue'

export default {
    data() {
        return {
            currUser: null,
            rate: null
        };
    },
    async created() {
        this.currUser = userService.getLoggedinUser()
        this.rate = await bitcoinService.getRate()
    },
    methods: {
        async _signup(userName) {
            try {
                const user = await userService.signup(userName)
                this.currUser = user
            } catch (err) {
                console.error(err)
            }
        },
        _logout() {
            this.currUser = null
            userService.logout()
        }
    },
    components: {
        Signup
    }
}
</script>

<style lang="scss">
.home {
    margin-block: 10px;
}
</style>