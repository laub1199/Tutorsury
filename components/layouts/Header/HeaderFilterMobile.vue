<template>
  <div class="header-filter-mobile d-flex d-md-none" :class="{ 'open-filter' : openFilter }">
    <div class="search">
      <label for="search-bar-mobile">
        <input id="search-bar-mobile" v-model="searchText" type="text" placeholder="輸入關鍵字">
      </label>
    </div>
    <div class="tabs">
      <div class="tab" :class="{ 'active' : activeTab === 0 }" @click="activeTab = 0">
        科目
        <span />
      </div>
      <div class="tab" :class="{ 'active' : activeTab === 1 }" @click="activeTab = 1">
        地區
        <span />
      </div>
      <div class="tab" :class="{ 'active' : activeTab === 2 }" @click="activeTab = 2">
        上課時間
        <span />
      </div>
      <div class="tab" :class="{ 'active' : activeTab === 3 }" @click="activeTab = 3">
        價錢
        <span />
      </div>
    </div>
    <div class="subject-panel panel">
      <div v-for="(subject, index) in subjects" :key="index" class="layers-container" @click="layerToggle({ e: $event}, 'level', subject.level)">
        <div class="layer-1">
          <div class="inner">
            <div class="left">
              {{ subject.level }}
              <img src="/media/elements/arrow_down.svg" alt="arrow down" height="8" width="13" class="arrow arrow-down">
              <img src="/media/elements/arrow_up.svg" alt="arrow up" height="8" width="13" class="arrow arrow-up">
            </div>
            <div class="right">
              <span
                v-if="filterChosen.subject.level === subject.level && filterChosen.subject.courses.length === subjects.find(subject => subject.level === filterChosen.subject.level).courses.length"
                class="choose-all-chosen"
                @click.stop
                @click="layerToggle({ type: 'level', val: subject.level, e: $event }, 'course', 'all')"
              >
                取消全選
              </span>
              <span
                v-else
                class="choose-all"
                @click.stop
                @click="layerToggle({ type: 'level', val: subject.level, e: $event }, 'course', 'all')"
              >
                全選
              </span>
            </div>
          </div>
        </div>
        <div class="layer-2">
          <div class="inner">
            <div
              v-for="(course, indexCourse) in subject.courses"
              :key="indexCourse"
              :class="{ 'chosen' : subject.level === filterChosen.subject.level && filterChosen.subject.courses.includes(course) }"
              @click.stop
              @click="layerToggle(null, 'course', course)"
            >
              {{ course }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filterMixin from '~/mixin/filter'
export default {
  name: 'HeaderFilterMobile',
  mixins: [filterMixin],
  data () {
    return {
      searchText: '',
      activeTab: 0
    }
  },
  methods: {
    async layerToggle (trigger, type, val) {
      if (trigger && trigger.type && trigger.val && trigger.e) {
        if (!trigger.e.target.closest('.layers-container').classList.contains('extend')) {
          for (const layerContainer of document.querySelectorAll('.layers-container')) {
            layerContainer.classList.remove('extend')
          }
          trigger.e.target.closest('.layers-container').classList.add('extend')
        }
        await this.filterSelectionHandler(trigger.type, trigger.val)
        this.filterSelectionHandler(type, val)
      } else if (trigger && trigger.e) {
        if (trigger.e.target.closest('.layers-container').classList.contains('extend')) {
          trigger.e.target.closest('.layers-container').classList.remove('extend')
        } else {
          for (const layerContainer of document.querySelectorAll('.layers-container')) {
            layerContainer.classList.remove('extend')
          }
          trigger.e.target.closest('.layers-container').classList.add('extend')
        }
        this.filterSelectionHandler(type, val)
      } else {
        this.filterSelectionHandler(type, val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-filter-mobile {
  height: 0;
  overflow: hidden;
  background-color: #212F3D;
  display: flex;
  flex-direction: column;
  &.open-filter {
    height: calc(100vh - 70px);
  }
  .search {
    width: 100%;
    height: 63px;
    text-align: center;
    padding: 26px 0 16px;
    label {
      width: 80%;
      margin: 0;
      input {
        width: 100%;
        height: 33px;
        border: 1.2px solid #58636E;
        border-radius: 50px;
        background-color: $tutorsury-dark;
        color: white;
        font-size: 13px;
        padding-left: 13px;
        &::placeholder {
          color: #58636E;
        }
        &:-ms-input-placeholder {
          color: #58636E;
        }
        &::-ms-input-placeholder {
          color: #58636E;
        }
      }
    }
  }
  .tabs {
    width: 80%;
    display: flex;
    margin: 0 auto;
    height: 52px;
    .tab {
      cursor: pointer;
      position: relative;
      flex: 1;
      color: #FFFFFF;
      font-size: 15px;
      line-height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      span {
        display: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background-color: $tutorsury-primary;
      }
      &.active {
        color: $tutorsury-primary;
        span {
          display: block;
        }
      }
    }
  }
  .panel {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .layers-container {
      .layer-1 {
        background-color: #35424F;
        height: 54px;
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        .inner {
          width: 80%;
          margin: 0 auto;
          height: 24px;
          font-weight: bold;
          font-size: 18px;
          line-height: 21px;
          display: flex;
          justify-content: space-between;
          .left {
            display: flex;
            .arrow {
              margin-left: 10px;
            }
            .arrow-down {
              display: block;
            }
            .arrow-up {
              display: none;
            }
          }
          .right {
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
          }
        }
      }
      .layer-2 {
        width: 100%;
        height: 0;
        transition: all 0.5s;
        overflow: hidden;
        .inner {
          padding: .5rem 0;
          display: flex;
          width: 80%;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: space-evenly;
          div {
            padding: .2rem 1rem;
            margin: .3rem .2rem;
            border: 1px solid #212F3D;
            border-radius: 50px;
            &.chosen {
              border: 1px solid #FFFFFF;
            }
          }
        }
      }
      &.extend {
        .layer-1 .inner {
          .arrow-down {
            display: none;
          }
          .arrow-up {
            display: block;
          }
        }
        .layer-2 {
          height: auto;
        }
      }
    }
  }
}
</style>
