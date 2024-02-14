<template>
    <section class="signup">
        <h3>Signup to get 100 bitcoins!</h3>
        <form @submit.prevent="onSignup">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="userName">
            <button>Signup</button>
        </form>
    </section>
</template>

<script>
export default {

    data() {
        return {
            userName: ''
        }
    },
    methods: {
        async onSignup() {
            this.$emit('signup', this.userName)
        }
    }

}
</script>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";

.signup {
    display: grid;
    gap: 30px;
    // justify-content: center;

    h3 {
        line-height: 1.2;
        background: linear-gradient(90deg, $clrPrimary2 0%, $clrPrimary3 50%, $clrPrimary2 100%);
        background-size: 200% 100%;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        animation: shine 10s infinite linear;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: start;
        row-gap: 10px;
        gap: 10px;

        button {
            grid-column: 1/-1;
        }
    }
}

@keyframes shine {
    from {
        background-position: 200% center;
    }

    to {
        background-position: -200% center;
    }
}
</style>