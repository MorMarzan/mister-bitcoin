<script>
import { carService } from '../services/car.service.js'

import CarList from '../cmps/CarList.vue'

export default {
    data() {
        return {
            cars: null,
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
        <CarList :cars="cars" />
        
    </main>
</template>
