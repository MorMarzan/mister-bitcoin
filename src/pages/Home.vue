<template>
    <section class="home">
        <div v-if="currUser" class="user-greeting">
            <img :src="currUser.imgUrl" :alt="currUser.name">
            <p>Hello <span class="red">{{ currUser.name }}</span></p>
            <p>Your balance is <span class="red">{{ currUser.balance }}$</span></p>
            <p v-if="rate">Bitcoin to USD rate is <span class="red">{{ rate }}</span></p>
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
@import "@/assets/styles/setup/variables.scss";

.home {
    margin-block: 20px;

    .user-greeting {
        display: grid;
        gap: 10px;
        // justify-content: center;

        button {
            justify-self: start;
        }

        img {
            width: 100px;
        }

        .red {
            color: $clrPrimary2;
        }
    }
}
</style>