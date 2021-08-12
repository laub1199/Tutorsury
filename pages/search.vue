<template>
  <div class="search-page">
    <SearchHero />
    <SearchFilterBar :queries="queries" />
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  components: {
    SearchHero: () => import('~/components/pages/Search/SearchHero'),
    SearchFilterBar: () => import('~/components/pages/Search/SearchFilterBar')
  },
  computed: {
    queries () {
      return this.$route.query
    }
  }
}
</script>

<style lang="scss" scoped>
.search-page {
}
</style>
