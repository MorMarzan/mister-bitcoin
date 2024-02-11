<template>
  <header class="main-layout full">
    <div class="container flex align-center">
      <h1>Mr. Bitcoin</h1>
      <nav :class="navClass">
        <RouterLink to="/" @click="toggleMobileNav">Home</RouterLink>
        <RouterLink to="/contact" @click="toggleMobileNav">Contacts</RouterLink>
        <RouterLink to="/statistics" @click="toggleMobileNav">Statistics</RouterLink>
      </nav>
      <button @click="toggleMobileNav" class="hamburger">☰</button>
    </div>
  </header>
</template>

<script>
import { utilService } from '@/services/util.service'
export default {
  methods: {
    toggleMobileNav() {
      if (!this.isMobile) return
      this.$store.commit('setIsMobileNavOpen')
    },
    checkIsMobile() {
      const currIsMobile = window.innerWidth <= 500
      this.$store.commit('setIsMobile', currIsMobile)
    }
  },
  computed: {
    navClass() {
      return { open: this.$store.getters.isMobileNavOpen }
    },
    isMobile() {
      return this.$store.getters.isMobile
    }
  },
  created() {
    this.debouncedCheckIsMobile = utilService.debounce(this.checkIsMobile, 500)
  },
  mounted() {
    this.checkIsMobile()
    window.addEventListener('resize', this.debouncedCheckIsMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.debouncedCheckIsMobile);

  },
}
</script>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";
@import "@/assets/styles/setup/mixins.scss";

header {
  height: 7vh;
  background-color: $clrPrimary1;

  .container {
    justify-content: space-between;

    nav {
      display: grid;

      @include for-mobile-only-layout {
        align-content: start;
        justify-content: center;
        justify-items: center;
        gap: 30px;

        position: fixed;
        top: 0;
        right: 0;

        height: 100vh;
        width: 55vw;
        padding-block: 7vh;
        background-color: $clrSecondary-2;
        border-inline-start: 1px solid $clrSecondary3;

        transform: translateX(100%);
        transition: transform 0.6s, box-shadow 0.6s;

        &.open {
          transform: translateX(0);
          box-shadow: -4px 0px 20px rgb(0 0 0 / 31%);
        }
      }

      @include for-narrow-layout {
        grid-auto-flow: column;
        gap: 5px;
      }

      .router-link-exact-active {
        color: $clrPrimary2;
        text-decoration: overline;
      }
    }
  }

  .hamburger {
    @include for-narrow-layout {
      display: none;
    }
  }
}
</style>