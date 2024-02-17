<template>
    <section class="transaction-list">
        <ul>
            <li v-for="transaction in transactions" :key="transaction._id">
                <TransactionPreview :transaction="transaction" />
            </li>
        </ul>
    </section>
</template>

<script>
import TransactionPreview from './TransactionPreview.vue'

export default {
    props: ['transactions'],
    components: { TransactionPreview }
}
</script>

<style lang="scss">
.transaction-list {
    ul {
        padding: 0;

        li {
            list-style: none;

        }
    }
}
</style>