export default {
  data () {
    return {
      rangeSlider: {
        min: 0,
        max: 5000,
        tooltip: 'always',
        formatter: value => `$${value}`,
        enableCross: false,
        height: 4,
        dotSize: 19
      }
    }
  },
  computed: {
    openFilter () {
      return this.$store.getters['filter/openFilter']
    },
    filterChoice () {
      return this.$store.getters['filter/filterChoice']
    },
    filterDataWrapper () {
      return {
        subjects: this.$store.getters['filter/subjects'],
        locations: this.$store.getters['filter/locations'],
        dates: this.$store.getters['filter/dates']
      }
    },
    priceRange: {
      get () {
        return this.$store.getters['filter/price']
      },
      set (val) {
        this.$store.commit('filter/UPDATE_PRICE', { price: val })
      }
    },
    searchText: {
      get () {
        return this.$store.getters['filter/searchText']
      },
      set (val) {
        this.$store.commit('filter/UPDATE_SEARCH_TEXT', { searchText: val })
      }
    }
  },
  methods: {
    toggleFilter () {
      this.$store.commit('filter/TOGGLE_FILTER')
    },
    filterSelectionHandler (type, key, keyVal, key2, val) {
      if (val === 'all') {
        if ([...this.filterChoice[type].find(obj => obj[key] === keyVal)[key2]].length === [...this.filterDataWrapper[type].find(obj => obj[key] === keyVal)[key2]].length) {
          this.$store.commit('filter/SET_FILTER', {
            isReplace: true,
            type,
            key,
            keyVal,
            key2,
            val: []
          })
        } else {
          this.$store.commit('filter/SET_FILTER', {
            isReplace: true,
            type,
            key,
            keyVal,
            key2,
            val: this.filterDataWrapper[type].find(obj => obj[key] === keyVal)[key2]
          })
        }
      } else if (![...this.filterChoice[type].find(obj => obj[key] === keyVal)[key2]].includes(val)) {
        this.$store.commit('filter/SET_FILTER', {
          isReplace: false,
          type,
          key,
          keyVal,
          key2,
          val
        })
      } else {
        this.$store.commit('filter/REMOVE_FILTER_ITEM', {
          type,
          key,
          keyVal,
          key2,
          val
        })
      }
    },
    filterReset () {
      this.$store.commit('filter/RESET_FILTER')
    },
    search (e) {
      const query = {
        q: this.filterChoice.searchText,
        subject: '',
        location: '',
        date: ''
      }

      // create subject query
      let index = 0
      for (const subject of this.filterChoice.subjects) {
        if (subject.courses.length > 0) {
          for (const course of subject.courses) {
            query.subject += `${index++ > 0 ? '.' : ''}${subject.level}${course}`
          }
        }
      }

      // create location query
      index = 0
      for (const location of this.filterChoice.locations) {
        if (location.districts.length > 0) {
          for (const district of location.districts) {
            query.location += `${index++ > 0 ? '.' : ''}${district}`
          }
        }
      }

      // create date query
      index = 0
      for (const date of this.filterChoice.dates) {
        if (date.times.length > 0) {
          for (const time of date.times) {
            query.date += `${index++ > 0 ? '.' : ''}${date.day} ${time}`
          }
        }
      }

      this.$router.push({
        path: 'search',
        query
      })
      this.$store.commit('filter/TOGGLE_FILTER')
    }
  }
}
