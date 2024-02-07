<template>
  <header>
    <h1>Contacts</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistics">Statistics</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5vh;
  padding: 10px;
  background-color: lightblue;
}
</style>