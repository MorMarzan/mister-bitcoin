<template>
    <section class="car-list">
        <ul>
            <li v-for="car in cars">
                <CarPreview :car="car"/>
            </li>
        </ul>
    </section>
</template>

<script>
import CarPreview from './CarPrevu.vue'
export default {
    props: {
        cars: {
            type: Array,
            required: true
        }
    },
    components: {
        CarPreview,
    }
}
</script>

<style lang="scss">
.car-list ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 10px;
    list-style: none;
    padding: 0;
}
.car-list ul li {
    padding: 10px;
    background-color: lightsteelblue;
}
</style>