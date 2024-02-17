<script>
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
import UserMsg from './cmps/UserMsg.vue'
import Overlay from './cmps/Overlay.vue'

export default {
    components: {
        AppHeader,
        AppFooter,
        UserMsg,
        Overlay
    }
}
</script>

<template>
    <UserMsg />
    <Overlay />
    <AppHeader />
    <main class="main-layout">
        <RouterView />
        <!-- <router-view v-slot="{ Component, route }">
            <transition name="fade">
                <component :is="Component" :key="route.path" />
            </transition>
        </router-view> -->
    </main>
    <AppFooter />
</template>

<style scoped lang="scss">
@import "@/assets/styles/setup/variables.scss";

main {
    min-height: calc(100vh - 14vh);
    background-color: $clrSecondary1;
}
</style>
