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
import { bitcoinService } from '@/services/bitcoin.service'
import { eventBus } from "@/services/eventBus.service.js"
import Signup from '@/cmps/Signup.vue'

export default {
    data() {
        return {
            rate: null
        }
    },
    async created() {
        this.rate = await bitcoinService.getRate()
    },
    methods: {
        async _signup(userName) {
            try {
                this.$store.dispatch({ type: 'signup', userName })
                eventBus.emit("user-msg", { txt: `Welcome ${userName}` })
            } catch (err) {
                console.error(err)
                eventBus.emit("user-msg", { txt: 'Problem during signup' })
            }
        },
        _logout() {
            try {
                this.$store.dispatch({ type: 'logout' })
                eventBus.emit("user-msg", { txt: `Logout completed successfully` })
            } catch (err) {
                console.error(err)
                eventBus.emit("user-msg", { txt: 'Problem during logout' })
            }
        },
    },
    computed: {
        currUser() {
            return this.$store.getters.user
        }
    },
    // watch: {
    //     currUser: {
    //         handler(newValue) {
    //             console.log("currUser changed", newValue);
    //         },
    //         deep: true
    //     }
    // },
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