<template>
    <form @submit.prevent="onSaveCar" class="car-edit">
        <input type="text" v-model="car.vendor">
        <input type="number" v-model="car.speed">
        <div class="actions">
            <RouterLink to="/car"><button>Cancel</button></RouterLink>
            <button>Save</button>
        </div>
    </form>
</template>

<script>
import { carService } from '@/services/car.service'
export default {
    data() {
        return {
            car: null,
        }
    },
    methods: {
        async onSaveCar() {
            const car = await carService.save(this.car)
            this.$router.push('/car')
        }
    },
    created() {
        this.car = carService.getEmptyCar()
    }
}
</script>

<style lang="scss">
.car-edit {
    display: grid;
    gap: 10px;
    justify-items: start;
    padding: 10px;
    background-color: lightblue;
    margin-block: 10px;
    .actions {
        justify-self: end;
    }
}
</style>