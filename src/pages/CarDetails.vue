<template>
    <section v-if="car" class="car-details">
        <h2>{{car.vendor}}</h2>
        <h2>{{car.speed}}</h2>
        <RouterLink to="/car"><button>Back</button></RouterLink>
    </section>
</template>

<script>
import { carService } from '@/services/car.service'
export default {
    data() {
        return {
            car: null,
        }
    },
    async created() {
        const { carId } = this.$route.params
        this.car = await carService.get(carId)
    }
}
</script>

<style lang="scss">
.car-details {
    display: flex;
    flex-direction: column;

    padding: 10px;
    background-color: rgb(236, 186, 92);

    a {
        align-self: end;
    }
}
</style>