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
    filterChoice () {
      return this.$store.getters['filter/filterChoice']
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
        if (this.filterChoice.subject.level !== val) {
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
          if (this.filterChoice.subject.courses.length === this.subjects.find(subject => subject.level === this.filterChoice.subject.level).courses.length) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'subject',
              layer2: 'courses',
              val: []
            })
          } else {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'subject',
              layer2: 'courses',
              val: this.subjects.find(subject => subject.level === this.filterChoice.subject.level).courses
            })
          }
        } else if (!this.filterChoice.subject.courses.includes(val)) {
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
            val: this.filterChoice.subject.courses.filter(course => course !== val)
          })
        }
        return
      }

      // locations
      if (type === 'area') {
        if (this.filterChoice.location.area !== val) {
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
          if (this.filterChoice.location.districts.length === this.locations.find(location => location.area === this.filterChoice.location.area).districts.length) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'location',
              layer2: 'districts',
              val: []
            })
          } else {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'location',
              layer2: 'districts',
              val: this.locations.find(location => location.area === this.filterChoice.location.area).districts
            })
          }
        } else if (!this.filterChoice.location.districts.includes(val)) {
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
            val: this.filterChoice.location.districts.filter(district => district !== val)
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
          if (this.filterChoice.date.day !== val) {
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
          if (this.filterChoice.date.times.length === this.dates.find(date => date.day === this.filterChoice.date.day).times.length) {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'date',
              layer2: 'times',
              val: []
            })
          } else {
            this.$store.commit('filter/SET_FILTER', {
              layer1: 'date',
              layer2: 'times',
              val: this.dates.find(date => date.day === this.filterChoice.date.day).times
            })
          }
        } else if (!this.filterChoice.date.times.includes(val)) {
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
            val: this.filterChoice.date.times.filter(time => time !== val)
          })
        }
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
      for (const course of this.filterChoice.subject.courses) {
        query.subject += `${index++ > 0 ? '.' : ''}${this.filterChoice.subject.level}${course}`
      }

      // create subject query
      index = 0
      for (const district of this.filterChoice.location.districts) {
        query.location += `${index++ > 0 ? '.' : ''}${district}`
      }

      // create subject query
      index = 0
      for (const time of this.filterChoice.date.times) {
        query.date += `${index++ > 0 ? '.' : ''}${this.filterChoice.date.day} ${time}`
      }

      this.$router.push({
        path: 'search',
        query
      })
      this.$store.commit('filter/TOGGLE_FILTER')
    }
  }
}
