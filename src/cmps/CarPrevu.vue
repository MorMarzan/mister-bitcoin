<template>
    <h2>{{car.vendor}}</h2>
    <p>{{car.speed}}</p>
</template>

<script>
export default {
    props: {
        car: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">

</style>