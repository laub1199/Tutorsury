<template>
  <div class="search-page">
    <SearchHero />
    <SearchFilterBar :queries="queries" />
    <SearchResult />
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  components: {
    SearchHero: () => import('~/components/pages/Search/SearchHero'),
    SearchFilterBar: () => import('~/components/pages/Search/SearchFilterBar'),
    SearchResult: () => import('~/components/pages/Search/SearchResult')
  },
  asyncData ({ store, route }) {
    const query = route.query

    if (query?.q) {
      store.commit('filter/UPDATE_SEARCH_TEXT', { searchText: query.q })
    }

    if (query?.subject) {
      const subjects = query.subject.split('.')
      for (const subject of subjects) {
        for (const obj of store.getters['filter/subjects']) {
          if (subject.includes(obj.level)) {
            store.commit('filter/SET_FILTER', {
              isReplace: false,
              type: 'subjects',
              key: 'level',
              keyVal: obj.level,
              key2: 'courses',
              val: subject.split(obj.level)[1]
            })
            break
          }
        }
      }
    }

    if (query?.location) {
      const districts = query.location.split('.')
      for (const district of districts) {
        for (const location of store.getters['filter/locations']) {
          if (location.districts.includes(district)) {
            store.commit('filter/SET_FILTER', {
              isReplace: false,
              type: 'locations',
              key: 'area',
              keyVal: location.area,
              key2: 'districts',
              val: district
            })
            break
          }
        }
      }
    }

    if (query?.date) {
      const dates = query.date.split('.')
      for (const date of dates) {
        const day = date.split(' ')[0]
        const time = date.split(' ')[1]
        store.commit('filter/SET_FILTER', {
          isReplace: false,
          type: 'dates',
          key: 'day',
          keyVal: day,
          key2: 'times',
          val: time
        })
      }
    }
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
