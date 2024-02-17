<template>
    <article class="transaction-preview">
        <p>{{ time }}: You transfered {{ transaction.to }} {{ transaction.amount }} ₿</p>
        <p></p>
    </article>
</template>

<script>
import { utilService } from '@/services/util.service'

export default {
    props: ['transaction'],
    computed: {
        time() {
            return utilService.formatTS(this.transaction.at, true)
        }
    }
}
</script>

<style lang="scss">
.transaction-preview {
    border-block-start: 1px solid white;

}
</style>