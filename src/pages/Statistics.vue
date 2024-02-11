<template>
    <section class="statistics">
        <Chart v-if="avgBlockDays && avgBlockSizes && avgBlockName" :labels="avgBlockDays" :data="avgBlockSizes"
            :name="avgBlockName" />
        <Chart v-if="marketPricekDays && marketPrices && marketPriceName" :labels="marketPricekDays" :data="marketPrices"
            :name="marketPriceName" />
    </section>
</template>

<script>
import { bitcoinService } from '@/services/bitcoin.service'
import { utilService } from '@/services/util.service'
import Chart from '../cmps/Chart.vue'

export default {
    components: {
        Chart
    },
    data() {
        return {
            avgBlockDays: null,
            avgBlockSizes: null,
            avgBlockName: null,

            marketPricekDays: null,
            marketPrices: null,
            marketPriceName: null
        }
    },
    async created() {
        const blockSizeData = await bitcoinService.getAvgBlockSize()
        this.avgBlockDays = blockSizeData.values.map(val => utilService.formatTS(val.x))
        this.avgBlockSizes = blockSizeData.values.map(val => (val.y).toFixed(3))
        this.avgBlockName = blockSizeData.name

        const marketPricekData = await bitcoinService.getMarketPriceHistory()
        this.marketPricekDays = marketPricekData.values.map(val => utilService.formatTS(val.x))
        this.marketPrices = marketPricekData.values.map(val => val.y)
        this.marketPriceName = marketPricekData.name
    }
}
</script>

<style lang="scss">
.statistics {
    display: grid;
    margin-block: 10px;
    place-content: space-around;
}
</style>