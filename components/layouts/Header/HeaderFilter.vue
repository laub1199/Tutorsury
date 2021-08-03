<template>
  <div class="header-filter" :class="{ 'open-filter' : openFilter }">
    <div class="filter-top">
      <div class="title-col">
        篩選器
      </div>
      <div class="subject-col">
        科目
      </div>
      <div class="location-col">
        地區
      </div>
      <div class="time-col">
        上課時間
      </div>
      <div class="price-col">
        價錢
      </div>
      <div class="arrow-col">
        <img src="/media/elements/arrow_down.svg" alt="arrow down" width="16px" height="10px" class="arrow arrow-down" @click="toggleFilter">
        <img src="/media/elements/arrow_up.svg" alt="arrow down" width="16px" height="10px" class="arrow arrow-up" @click="toggleFilter">
      </div>
    </div>
    <div class="filter-menu">
      <div class="filter-menu-container">
        <div class="title-col" />
        <div class="subject-col">
          <div class="layer-1">
            <ul class="list">
              <li
                v-for="(subject, index) in subjects"
                :key="index" class="item"
                :class="{ 'chosen' : subject.level === filterChosen.subject.level }"
                @click="filterSelectionHandler('level', subject.level)"
              >
                {{ subject.level }}
                <span
                  v-if="subject.level === filterChosen.subject.level && filterChosen.subject.courses.length > 0 && filterChosen.subject.courses.length !== subjects.find(subject => subject.level === filterChosen.subject.level).courses.length"
                >
                  {{ `（已選擇${filterChosen.subject.courses.length}項）` }}
                </span>
                <span
                  v-else-if="subject.level === filterChosen.subject.level && filterChosen.subject.courses.length > 0 && filterChosen.subject.courses.length === subjects.find(subject => subject.level === filterChosen.subject.level).courses.length"
                >
                  {{ `（已全選）` }}
                </span>
                <img src="/media/elements/arrow_right.svg" alt="arrow right" width="8px" height="13px" class="arrow-right">
                <img src="/media/elements/arrow_right_mint.svg" alt="arrow right" width="8px" height="13px" class="arrow-right-selected">
              </li>
            </ul>
          </div>
          <div class="layer-2">
            <div
              v-if="filterChosen.subject.level && !(filterChosen.subject.courses && filterChosen.subject.courses.length === subjects.find(subject => subject.level === filterChosen.subject.level).courses.length)"
              class="choose-all"
              @click="filterSelectionHandler('course', 'all')"
            >
              全選
            </div>
            <div
              v-else-if="filterChosen.subject.level"
              class="choose-all-chosen"
              @click="filterSelectionHandler('course', 'all')"
            >
              取消全選
            </div>
            <ul class="list">
              <li v-if="!filterChosen.subject.level">
                請選取級別
              </li>
              <li
                v-for="(course, index) in subjects.find(subject => subject.level === filterChosen.subject.level).courses"
                v-else
                :key="index"
                class="item"
                :class="{ 'chosen' : filterChosen.subject.courses.includes(course) }"
                @click="filterSelectionHandler('course', course)"
              >
                {{ course }}
              </li>
            </ul>
          </div>
        </div>
        <div class="location-col">
          <div class="layer-1">
            <ul class="list">
              <li
                v-for="(location, index) in locations"
                :key="index" class="item"
                :class="{ 'chosen' : location.area === filterChosen.location.area }"
                @click="filterSelectionHandler('area', location.area)"
              >
                {{ location.area }}
                <span
                  v-if="location.area === filterChosen.location.area && filterChosen.location.districts.length > 0 && filterChosen.location.districts.length !== locations.find(location => location.area === filterChosen.location.area).districts.length"
                >
                  {{ `（已選擇${filterChosen.location.districts.length}項）` }}
                </span>
                <span
                  v-else-if="location.area === filterChosen.location.area && filterChosen.location.districts.length > 0 && filterChosen.location.districts.length === locations.find(location => location.area === filterChosen.location.area).districts.length"
                >
                  {{ `（已全選）` }}
                </span>
                <img src="/media/elements/arrow_right.svg" alt="arrow right" width="8px" height="13px" class="arrow-right">
                <img src="/media/elements/arrow_right_mint.svg" alt="arrow right" width="8px" height="13px" class="arrow-right-selected">
              </li>
            </ul>
          </div>
          <div class="layer-2">
            <div
              v-if="filterChosen.location.area && !(filterChosen.location.districts && filterChosen.location.districts.length === locations.find(location => location.area === filterChosen.location.area).districts.length)"
              class="choose-all"
              @click="filterSelectionHandler('district', 'all')"
            >
              全選
            </div>
            <div
              v-else-if="filterChosen.location.area"
              class="choose-all-chosen"
              @click="filterSelectionHandler('district', 'all')"
            >
              取消全選
            </div>
            <ul class="list">
              <li v-if="!filterChosen.location.area">
                請選取區域
              </li>
              <li
                v-for="(district, index) in locations.find(location => location.area === filterChosen.location.area).districts"
                v-else
                :key="index"
                class="item"
                :class="{ 'chosen' : filterChosen.location.districts.includes(district) }"
                @click="filterSelectionHandler('district', district)"
              >
                {{ district }}
              </li>
            </ul>
          </div>
        </div>
        <div class="time-col">
          <div class="layer-1">
            <div
              v-if="filterChosen.date.day"
              class="choose-all"
              @click="filterSelectionHandler('day', 'all')"
            >
              全選
            </div>
            <div
              v-else
              class="choose-all-chosen"
              @click="filterSelectionHandler('day', 'all')"
            >
              取消全選
            </div>
            <ul class="list">
              <li
                v-for="(date, index) in dates"
                :key="index" class="item"
                :class="{ 'chosen' : date.day === filterChosen.date.day }"
                @click="filterSelectionHandler('day', date.day)"
              >
                {{ date.day }}
                <span
                  v-if="date.day === filterChosen.date.day && filterChosen.date.times.length > 0 && filterChosen.date.times.length !== dates.find(date => date.day === filterChosen.date.day).times.length"
                >
                  {{ `（已選擇${filterChosen.date.times.length}項）` }}
                </span>
                <span
                  v-else-if="filterChosen.date.day === '' || date.day === filterChosen.date.day && filterChosen.date.times.length === dates.find(date => date.day === filterChosen.date.day).times.length"
                >
                  {{ `（已全選）` }}
                </span>
                <img src="/media/elements/arrow_right.svg" alt="arrow right" width="8px" height="13px" class="arrow-right">
                <img src="/media/elements/arrow_right_mint.svg" alt="arrow right" width="8px" height="13px" class="arrow-right-selected">
              </li>
            </ul>
          </div>
          <div class="layer-2">
            <div
              v-if="filterChosen.date.day && !(filterChosen.date.times && filterChosen.date.times.length === dates.find(date => date.day === filterChosen.date.day).times.length)"
              class="choose-all"
              @click="filterSelectionHandler('time', 'all')"
            >
              全選
            </div>
            <div
              v-else-if="filterChosen.date.day"
              class="choose-all-chosen"
              @click="filterSelectionHandler('time', 'all')"
            >
              取消全選
            </div>
            <ul class="list">
              <li v-if="!filterChosen.date.day">
                請選取日子
              </li>
              <li
                v-for="(time, index) in dates.find(date => date.day === filterChosen.date.day).times"
                v-else
                :key="index"
                class="item"
                :class="{ 'chosen' : filterChosen.date.times.includes(time) }"
                @click="filterSelectionHandler('time', time)"
              >
                {{ time }}
              </li>
            </ul>
          </div>
        </div>
        <div class="price-col">
          <div class="price-range-slider-container">
            <client-only>
              <vue-range-slider
                v-model="filterChosen.price"
                class="price-range-slider"
                :min="rangeSlider.min"
                :max="rangeSlider.max"
                :formatter="rangeSlider.formatter"
                :tooltip-merge="rangeSlider.tooltipMerge"
                :enable-cross="rangeSlider.enableCross"
                :dot-size="rangeSlider.dotSize"
              />
            </client-only>
          </div>
          <div class="filter-controls">
            <div class="reset" @click="filterReset">
              重設已選
            </div>
            <div class="search" @click="search">
              <img src="/media/elements/search.svg" alt="search" width="30px" height="30px">
            </div>
          </div>
        </div>
        <div class="arrow-col" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderFilter',
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
    rangeSlider () {
      return this.$store.getters['filter/rangeSlider']
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
</script>

<style lang="scss" scoped>
.header-filter {
  width: 100%;
  display: flex;
  flex-direction: column;
  ul {
    li {
      padding: 8px 15px 8px 0;
      font-size: 15px;
      line-height: 18px;
      display: flex;
      img {
        margin-left: 10px;
      }
      .arrow-right {
        display: block;
      }
      .arrow-right-selected {
        display: none;
      }
      &.chosen {
        color: $tutorsury-primary;
        .arrow-right {
          display: none;
        }
        .arrow-right-selected {
          display: block;
        }
      }
    }
  }
  .filter-top {
    background-color: #35424F;
    height: 37px;
    width: 100%;
    display: flex;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.5s;
    .title-col, .subject-col, .location-col, .time-col, .price-col {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      flex-direction: row;
    }
  }
  .filter-menu {
    height: 0;
    overflow: hidden;
    background-color: #35424F;
    display: flex;
    color: #FFFFFF;
    transition: height 0.5s;
    .filter-menu-container {
      padding-top: 28px;
      display: flex;
      width: 100%;
    }
  }
  .title-col {
    width: 12%;
    padding-left: 2rem;
  }
  .layer-1 {
    width: 50%;
    .list {
      .item {
        cursor: pointer;
      }
    }
  }
  .layer-2 {
    min-width: 78px;
    width: 35%;
    .list {
      max-height: 333px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background: #58636E;
      }
      &::-webkit-scrollbar-thumb {
        background: #FFFFFF;
      }
      .item {
        cursor: pointer;
      }
    }
  }
  .choose-all {
    padding-bottom: 1px;
    width: 60px;
    height: 24px;
    display: flex;
    border: 1.5px solid #FFFFFF;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    &-chosen {
      padding-bottom: 1px;
      height: 24px;
      display: flex;
      border: 1.5px solid #FFFFFF;
      border-radius: 50px;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      line-height: 18px;
      cursor: pointer;
      width: 90px;
    }
  }
  .subject-col {
    width: 21%;
    display: flex;
  }
  .location-col {
    width: 21%;
    display: flex;
    @include media-breakpoint-down(md) {
      width: 17%;
    }
  }
  .time-col {
    width: 21%;
    display: flex;
  }
  .price-col {
    width: 21%;
    display: flex;
    flex-direction: column;
    .price-range-slider-container {
      width: 100%;
      padding-top: 3rem;
      flex: 1;
      .price-range-slider {
        /deep/ .slider-tooltip {
          background-color: #212F3D;
          border-radius: 4px;
          font-weight: 600;
          line-height: 16px;
          border: none;
          &::before {
            border: none;
          }
        }
        /deep/ .slider-dot {
          border: 2px solid #C1C9D2;
        }
        /deep/ .slider-process {
          background-color: #47F1B4;
        }
        /deep/ .slider-piecewise {
          background-color: #E3E8EE;
          border-radius: 4px;
        }
      }
    }
    .filter-controls {
      display: flex;
      padding-bottom: 2rem;
      justify-content: flex-end;
      .reset {
        cursor: pointer;
        width: 118px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #35424F;
        color: #FFFFFF;
        font-size: 22px;
        line-height: 26px;
        border-radius: 50px;
        border: 1.5px solid #FFFFFF;
        margin-right: 28px;
        padding-bottom: 1px;
      }
      .search {
        cursor: pointer;
        width: 60px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #47F1B4;
        border-radius: 50px;
        border: 1.5px solid #47F1B4;
      }

    }
  }
  .arrow-col {
    width: 4%;
    display: flex;
    align-items: center;
    padding-right: 2rem;
    @include media-breakpoint-down(lg) {
      width: 8%;
    }
    .arrow {
      cursor: pointer;
    }
    .arrow-down {
      display: block;
    }
    .arrow-up {
      display: none;
    }
  }
  &.open-filter {
    .arrow-down {
      display: none;
    }
    .arrow-up {
      display: block;
    }
    .filter-top {
      box-shadow: 0 10px 10px rgba(37, 41, 46, 0.5);
    }
    .filter-menu {
      height: 450px;
    }
  }
}
</style>
