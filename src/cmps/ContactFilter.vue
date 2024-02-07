<template>
  <section class="contact-filter">
    <p>Filter</p>
    <input @input="onFilter" type="text" v-model="filterBy.txt" />
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
.contact-filter {
  display: flex;
  gap: 10px;

  padding: 10px;
  background-color: lightblue;
  margin: 10px 0;
}
</style>