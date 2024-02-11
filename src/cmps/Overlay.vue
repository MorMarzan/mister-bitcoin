<template>
    <div class="overlay" :class="navClass" @click="toggleMobileNav"></div>
</template>
  
<script>
export default {
    methods: {
        toggleMobileNav() {
            this.$store.commit('setIsMobileNavOpen')
        }
    },
    computed: {
        navClass() {
            return { open: this.$store.getters.isMobileNavOpen }
        }
    }
}
</script>
  
<style lang="scss">
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;

    transition: opacity 0.6s;

    &.open {
        opacity: 1;
        pointer-events: auto;
    }
}
</style>
  