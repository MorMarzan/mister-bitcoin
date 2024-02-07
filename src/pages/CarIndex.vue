<script>
import { carService } from '../services/car.service.js'

import CarList from '../cmps/CarList.vue'

export default {
    data() {
        return {
            cars: null,
        }
    },
    methods: {
        async removeCar(carId) {
            await carService.remove(carId)

            const idx = this.cars.findIndex(car => car._id === carId)
            this.cars.splice(idx, 1)
        }
    },
    async created() {
        this.cars = await carService.query()
    },
    components: {
        CarList,
    }
}
</script>

<template>
	<main>
        <h1>Cars</h1>
        <CarList v-if="cars" @remove="removeCar" :cars="cars" />
        <img v-else src="../assets/puff.svg" alt="">
    </main>
</template>

<style lang="scss">
img {
    display: block;
    width: 200px;
    margin: 100px auto;
}
</style>
