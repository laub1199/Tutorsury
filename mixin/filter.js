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
    subjects () {
      return this.$store.getters['filter/subjects']
    },
    locations () {
      return this.$store.getters['filter/locations']
    },
    dates () {
      return this.$store.getters['filter/dates']
    },
    filterChosen () {
      return this.$store.getters['filter/filterChosen']
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
    filterSelectionHandler (type, val) {
      // subjects
      if (type === 'level') {
        if (this.filterChosen.subject.level !== val) {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'subject',
            layer2: 'courses',
            val: []
          })
        }
        this.$store.commit('filter/SET_FILTER', {
          layer1: 'subject',
          layer2: 'level',
          val
        })
        return
      } else if (type === 'course') {
        if (val === 'all') {
          if (this.filterChosen.subject.courses.length === this.subjects.find(subject => subject.level === this.filterChosen.subject.level).courses.length) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'subject',
              layer2: 'courses',
              val: []
            })
          } else {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'subject',
              layer2: 'courses',
              val: this.subjects.find(subject => subject.level === this.filterChosen.subject.level).courses
            })
          }
        } else if (!this.filterChosen.subject.courses.includes(val)) {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'subject',
            layer2: 'courses',
            val,
            isPush: true
          })
        } else {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'subject',
            layer2: 'courses',
            val: this.filterChosen.subject.courses.filter(course => course !== val)
          })
        }
        return
      }

      // locations
      if (type === 'area') {
        if (this.filterChosen.location.area !== val) {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'location',
            layer2: 'districts',
            val: []
          })
        }
        this.$store.commit('filter/SET_FILTER', {
          layer1: 'location',
          layer2: 'area',
          val
        })
      } else if (type === 'district') {
        if (val === 'all') {
          if (this.filterChosen.location.districts.length === this.locations.find(location => location.area === this.filterChosen.location.area).districts.length) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'location',
              layer2: 'districts',
              val: []
            })
          } else {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'location',
              layer2: 'districts',
              val: this.locations.find(location => location.area === this.filterChosen.location.area).districts
            })
          }
        } else if (!this.filterChosen.location.districts.includes(val)) {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'location',
            layer2: 'districts',
            val,
            isPush: true
          })
        } else {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'location',
            layer2: 'districts',
            val: this.filterChosen.location.districts.filter(district => district !== val)
          })
        }
      }

      // dates
      if (type === 'day') {
        if (val === 'all') {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'date',
            layer2: 'day',
            val: ''
          })
        } else {
          if (this.filterChosen.date.day !== val) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'date',
              layer2: 'times',
              val: []
            })
          }
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'date',
            layer2: 'day',
            val
          })
        }
      } else if (type === 'time') {
        if (val === 'all') {
          if (this.filterChosen.date.times.length === this.dates.find(date => date.day === this.filterChosen.date.day).times.length) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'date',
              layer2: 'times',
              val: []
            })
          } else {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'date',
              layer2: 'times',
              val: this.dates.find(date => date.day === this.filterChosen.date.day).times
            })
          }
        } else if (!this.filterChosen.date.times.includes(val)) {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'date',
            layer2: 'times',
            val,
            isPush: true
          })
        } else {
          this.$store.commit('filter/SET_FILTER', {
            layer1: 'date',
            layer2: 'times',
            val: this.filterChosen.date.times.filter(time => time !== val)
          })
        }
      }
    },
    filterReset () {
      this.$store.commit('filter/RESET_FILTER')
    },
    search () {
      console.log('=====================================================')
      console.log(this.filterChosen)
      console.log('=====================================================')
      // Todo: go to search page with queries
    }
  }
}
