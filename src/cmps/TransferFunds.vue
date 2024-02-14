<template>
    <section class="transfer-funds">
        <h4>Transfer to {{ contact.name }}</h4>
        <form @submit.prevent="onTransfer">
            <input type="number" name="sum" id="sum" v-model="balanceToEdit" :min="1" :max="balance">
            <label for="sum">Bitcoins</label>
        </form>
    </section>
</template>

<script>
export default {
    props: ['contact', 'balance'],
    data() {
        return {
            balanceToEdit: this.balance
        }
    },
    methods: {
        onTransfer() {
            console.log('hi')
            this.$emit("transfer", this.balanceToEdit)
        }
    }

}
</script>

<style lang="scss"></style>