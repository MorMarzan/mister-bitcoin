<template>
    <section class="signup">
        <h3>Signup to get 100 bitcoins!</h3>
        <form @submit.prevent="onSignup">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="userName">
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

<style lang="scss"></style>