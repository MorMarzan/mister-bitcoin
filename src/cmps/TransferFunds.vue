<template>
    <section class="transfer-funds">
        <h4>Transfer to {{ contact.name }}</h4>
        <form @submit.prevent="onTransfer">
            <input type="number" name="sum" id="sum" v-model="balanceToEdit" :min="1" :max="balance">
            <label for="sum">Bitcoins</label>
            <button>Transfer</button>
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
            this.$emit("transfer", this.balanceToEdit)
        }
    }

}
</script>

<style lang="scss">
.transfer-funds {
    display: grid;
    gap: 10px;

    form {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>