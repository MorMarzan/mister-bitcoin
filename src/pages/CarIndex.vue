<script>
import { carService } from '../services/car.service.js'

import CarList from '../cmps/CarList.vue'
import CarFilter from '../cmps/CarFilter.vue'

export default {
    data() {
        return {
            cars: null,
            filterBy: { txt: '' }
        }
    },
    methods: {
        async removeCar(carId) {
            await carService.remove(carId)

            const idx = this.cars.findIndex(car => car._id === carId)
            this.cars.splice(idx, 1)
        },
        filterCars(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredCars() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.cars.filter(car => regex.test(car.vendor))
        }
    },
    async created() {
        this.cars = await carService.query()
    },
    components: {
        CarList,
        CarFilter,
    }
}
</script>

<template>
	<main>
        <CarFilter @filter="filterCars" />
        <RouterLink to="car/edit"><button>Add a Car</button></RouterLink>
        <CarList v-if="cars" @remove="removeCar" :cars="filteredCars" />
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
