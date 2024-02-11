<template>
  <header class="main-layout full">
    <div class="container flex align-center">
      <h1>Contacts</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/statistics">Statistics</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";

header {
  height: 7vh;
  background-color: $clrPrimary1;

  .container {
    justify-content: space-between;

    nav {
      display: grid;
      grid-auto-flow: column;
      gap: 5px;

      .router-link-exact-active {
        color: $clrPrimary2;
        text-decoration: overline;
      }
    }
  }
}
</style>