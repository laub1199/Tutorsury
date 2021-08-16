<template>
  <div class="search-filter-bar">
    <div class="content">
      <div class="d-flex w-100">
        <div class="category">
          <p class="category-name">
            關鍵字
          </p>
          <p v-if="!queries.q" class="category-item">
            冇
          </p>
          <div v-else class="category-item">
            <p>{{ queries.q }}</p>
            <div class="delete" @click="deleteFilterItem('searchText', queries.q)">
              <span class="line-1" />
              <span class="line-2" />
            </div>
          </div>
        </div>
        <div class="category">
          <p class="category-name">
            科目
          </p>
          <p v-if="!queries.subject" class="category-item">
            冇揀到
          </p>
          <div v-else class="category-list d-flex flex-wrap">
            <div v-for="(item, index) in queries.subject.split('.')" :key="index" class="category-item">
              <span>{{ item }}</span>
              <div class="delete" @click="deleteFilterItem('subject', item)">
                <span class="line-1" />
                <span class="line-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="category">
          <p class="category-name">
            地區
          </p>
          <p v-if="!queries.location" class="category-item">
            冇揀到
          </p>
          <div v-else class="category-list d-flex flex-wrap">
            <div v-for="(item, index) in queries.location.split('.')" :key="index" class="category-item">
              <span>{{ item }}</span>
              <div class="delete" @click="deleteFilterItem('location', item)">
                <span class="line-1" />
                <span class="line-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="category">
          <p class="category-name">
            時間
          </p>
          <p v-if="!queries.date" class="category-item">
            冇揀到
          </p>
          <div v-else class="category-list d-flex flex-wrap">
            <div v-for="(item, index) in queries.date.split('.')" :key="index" class="category-item">
              <span>{{ item }}</span>
              <div class="delete" @click="deleteFilterItem('date', item)">
                <span class="line-1" />
                <span class="line-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="rank-control d-flex flex-column">
          <div class="d-flex">
            <div class="rank-title">
              排序方式
            </div>
            <div v-if="!openTankList" class="rank-selected" @click="openTankList = true">
              {{ selectedRank }}
              <div class="arrow-col">
                <img src="/media/elements/arrow_down.svg" alt="arrow down" width="16px" height="10px" class="arrow arrow-down">
              </div>
            </div>
            <div v-else class="rank-list">
              <div class="list-item">
                <p v-for="(rank, index) in ranks" :key="index" :class="{ 'active': selectedRank === rank }" @click="selectedRank = rank; openTankList = false">
                  {{ rank }}
                </p>
              </div>
            </div>
          </div>
          <div v-if="selectedRank !== '預設'" class="d-flex py-2 pl-4 order-control" @click="order = order === 'desc' ? 'asc' : 'desc'">
            <div class="text-box" :class="{ 'active': order === 'desc' }">
              高
            </div>
            <div class="arrow d-flex justify-content-center align-items-center mx-2">
              <img v-if="order === 'desc'" src="/media/elements/arrow_right_extend.svg" alt="arrow right" width="22" height="16">
              <img v-else src="/media/elements/arrow_left_extend.svg" alt="arrow left" width="22" height="16">
            </div>
            <div class="text-box" :class="{ 'active': order === 'asc' }">
              低
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilterBar',
  props: {
    queries: {
      default: () => {
        return {
          q: '',
          subject: '',
          location: '',
          date: ''
        }
      },
      type: Object
    }
  },
  data () {
    return {
      ranks: ['預設', '價錢', '瀏覽量'],
      selectedRank: '預設',
      openTankList: false,
      order: 'desc'
    }
  },
  computed: {
    filterChoice () {
      return this.$store.getters['filter/filterChoice']
    }
  },
  methods: {
    deleteFilterItem (type, val) {
      switch (type) {
        case 'searchText':
          this.$store.commit('filter/REMOVE_FILTER_ITEM', { type })
          break
        case 'subject':
          for (const obj of this.$store.getters['filter/subjects']) {
            if (val.includes(obj.level)) {
              this.$store.commit('filter/REMOVE_FILTER_ITEM', {
                type: 'subjects',
                key: 'level',
                keyVal: obj.level,
                key2: 'courses',
                val: val.split(obj.level)[1]
              })
              break
            }
          }
          break
        case 'location':
          for (const location of this.$store.getters['filter/locations']) {
            if (location.districts.includes(val)) {
              this.$store.commit('filter/REMOVE_FILTER_ITEM', {
                type: 'locations',
                key: 'area',
                keyVal: location.area,
                key2: 'districts',
                val
              })
              break
            }
          }
          break
        case 'date':
          this.$store.commit('filter/REMOVE_FILTER_ITEM', {
            type: 'dates',
            key: 'day',
            keyVal: val.split(' ')[0],
            key2: 'times',
            val: val.split(' ')[1]
          })
          break
      }

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
        query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-filter-bar {
  width: 100%;
  margin-top: 50px;
  .content {
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    .category {
      margin-right: 35px;
      width: 19%;
      display: flex;
      @media screen and (max-width: 1152px) {
        display: none;
      }
      .category-list {
        flex-flow: column;
      }
      .category-name {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #55606E;
        margin-right: 20px;
        padding: 5px 9px;
        margin-bottom: 0;
        min-width: fit-content;
      }
      .category-item {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        background-color: $tutorsury-primary;
        width: fit-content;
        border-radius: 5px;
        padding: 5px 9px;
        display: flex;
        height: fit-content;
        margin-bottom: 10px;
        margin-right: 10px;
        p {
          word-break: break-all;
          margin: 0;
          line-height: 21px;
        }
        .delete {
          position: relative;
          width: 18px;
          height: 21px;
          display: flex;
          cursor: pointer;
          align-self: center;
          margin: 0 2px;
          .line-1 {
            width: 15px;
            height: 2px;
            background-color: #FFFFFF;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-40%, -50%) rotate(45deg);
          }
          .line-2 {
            width: 15px;
            height: 2px;
            background-color: #FFFFFF;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-40%, -50%) rotate(-45deg);
          }
        }
      }
    }
    .rank-control {
      flex: 1;
      & > div {
        justify-content: flex-start;
        @media screen and (max-width: 1152px) {
          justify-content: flex-end;
          padding: 0 20px;
        }
      }
      .rank-title {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #55606E;
        padding: 5px 9px;
      }
      .rank-selected {
        background-color: #55606E;
        border-radius: 5px;
        color: #FFFFFF;
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        padding: 5px 9px;
        display: flex;
        cursor: pointer;
        .arrow-col {
          margin-left: 5px;
        }
      }
      .rank-list {
        background-color: #E6EDF3;
        border-radius: 5px;
        padding: 0 9px;
        p {
          padding: 5px 0;
          cursor: pointer;
          margin: 0;
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
          color: #55606E;
          &.active {
            color: $tutorsury-primary;
          }
        }
      }
      .order-control {
        cursor: pointer;
        .text-box {
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
          color: #FFFFFF;
          padding: 5px 9px;
          border-radius: 5px;
          background-color: #55606E;
          &.active {
            background-color: $tutorsury-primary;
          }
        }
      }
    }
  }
}
</style>
