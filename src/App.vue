<script>
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue'
import { bitcoinService } from './services/bitcoin.service'

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
    <main>
        <RouterView />
    </main>
    <AppFooter />
</template>

<style scoped>
main {
    min-height: calc(100vh - 10vh - 4em);
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
