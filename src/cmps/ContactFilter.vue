<template>
  <section class="contact-filter main-layout full">
    <div class="container flex align-center">
      <p>Filter your contacts</p>
      <input @input="onFilter" type="text" v-model="filterBy.txt" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { txt: "" },
    }
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy)
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/setup/variables.scss";

.contact-filter {
  gap: 10px;

  padding-block: 10px;
  margin-block-end: 10px;
  background-color: $clrSecondary2;

  p {
    margin-inline-end: 10px;
  }
}
</style>