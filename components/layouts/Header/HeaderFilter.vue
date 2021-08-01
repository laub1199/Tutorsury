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
        <img src="/media/elements/arrow_down.svg" alt="arrow down" width="24px" height="10px" class="arrow arrow-down" @click="toggleFilter">
        <img src="/media/elements/arrow_up.svg" alt="arrow down" width="24px" height="10px" class="arrow arrow-up" @click="toggleFilter">
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
                <img src="/media/elements/arrow_right.svg" alt="arrow right" width="6px" height="14px" class="arrow-right">
                <img src="/media/elements/arrow_right_mint.svg" alt="arrow right" width="6px" height="14px" class="arrow-right-selected">
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
                <img src="/media/elements/arrow_right.svg" alt="arrow right" width="6px" height="14px" class="arrow-right">
                <img src="/media/elements/arrow_right_mint.svg" alt="arrow right" width="6px" height="14px" class="arrow-right-selected">
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
          上課時間
        </div>
        <div class="price-col">
          價錢
        </div>
        <div class="arrow-col" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderFilter',
  data () {
    return {
      openFilter: false,
      // dummy data
      subjects: [
        {
          level: '小學',
          courses: ['全科', '功課輔導', '升班', '中文', '英文', '數學', '常識']
        },
        {
          level: '初中',
          courses: ['全科', '功課輔導', '升班', '中文', '英文', '數學', '常識']
        },
        {
          level: '高中',
          courses: ['中文', '英文', '通常', '地理', '中史', '世史', '經濟', 'BAFS', '中國文學', 'TEMP1', 'TEMP2', 'TEMP3', 'TEMP4', 'TEMP5', 'TEMP6', 'TEMP7']
        },
        {
          level: '中學數理',
          courses: ['全科', '功課輔導', '升班', '中文', '英文', '數學', '常識']
        }
      ],
      locations: [
        {
          area: '港島',
          districts: ['中西區', '灣仔區', '東區', '南區']
        },
        {
          area: '九龍',
          districts: ['油尖旺區', '深水埗區', '九龍城區', '黃大仙區', '觀塘區']
        },
        {
          area: '新界',
          districts: ['葵青區', '荃灣區', '屯門區', '元朗區', '離島區', '北區', '大埔區', '沙田區', '西貢區']
        }
      ],
      filterChosen: {
        subject: {
          level: '',
          courses: []
        },
        location: {
          area: '',
          districts: []
        }
      }
    }
  },
  methods: {
    toggleFilter () {
      this.openFilter = !this.openFilter
    },
    filterSelectionHandler (type, val) {
      // subjects
      if (type === 'level') {
        if (this.filterChosen.subject.level !== val) {
          this.filterChosen.subject.courses = []
        }
        this.filterChosen.subject.level = val
        return
      } else if (type === 'course') {
        if (val === 'all') {
          if (this.filterChosen.subject.courses.length === this.subjects.find(subject => subject.level === this.filterChosen.subject.level).courses.length) {
            this.filterChosen.subject.courses = []
          } else {
            this.filterChosen.subject.courses = this.subjects.find(subject => subject.level === this.filterChosen.subject.level).courses
          }
        } else if (!this.filterChosen.subject.courses.includes(val)) {
          this.filterChosen.subject.courses.push(val)
        } else {
          this.filterChosen.subject.courses = this.filterChosen.subject.courses.filter(course => course !== val)
        }
        return
      }

      // locations
      if (type === 'area') {
        if (this.filterChosen.location.area !== val) {
          this.filterChosen.location.districts = []
        }
        this.filterChosen.location.area = val
      } else if (type === 'district') {
        if (val === 'all') {
          if (this.filterChosen.location.districts.length === this.locations.find(location => location.area === this.filterChosen.location.area).districts.length) {
            this.filterChosen.location.districts = []
          } else {
            this.filterChosen.location.districts = this.locations.find(location => location.area === this.filterChosen.location.area).districts
          }
        } else if (!this.filterChosen.location.districts.includes(val)) {
          this.filterChosen.location.districts.push(val)
        } else {
          this.filterChosen.location.districts = this.filterChosen.location.districts.filter(location => location !== val)
        }
      }
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
  }
  .price-col {
    width: 21%;
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
