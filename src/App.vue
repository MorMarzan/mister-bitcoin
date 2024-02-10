<script>
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue'

export default {
    components: {
        AppHeader,
        AppFooter,
        UserMsg,
    }
}
</script>

<template>
    <UserMsg />
    <AppHeader />
    <main class="main-layout">
        <RouterView />
    </main>
    <AppFooter />
</template>

<style scoped lang="scss">
@import "@/assets/styles/setup/variables.scss";

main {
    min-height: calc(100vh - 14vh);
    background-color: $clrSecondary1;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
