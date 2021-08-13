<template>
  <div class="header-filter-mobile" :class="{ 'open-filter' : openFilter }">
    <div class="search">
      <label for="search-bar-mobile">
        <input id="search-bar-mobile" v-model="searchText" type="text" placeholder="輸入關鍵字">
      </label>
    </div>
    <div class="tabs">
      <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ 'active' : activeTab === index }" @click="tabToggle(index)">
        {{ tab }}
        <span />
      </div>
    </div>
    <div v-if="activeTab < 3" class="panel" :class="filterPanels[activeTab]">
      <FilterPanelMobile :type="filterPanels[activeTab].type" :key1="filterPanels[activeTab].key1" :key2="filterPanels[activeTab].key2" :filter-data-wrapper="filterDataWrapper" :filter-choice="filterChoice" :filter-selection-handler="filterSelectionHandler" />
    </div>
    <div v-else-if="activeTab === 3" class="price-panel panel">
      <div class="price-control-container">
        <div class="inner">
          <div class="reset">
            重設價錢範圍
          </div>
        </div>
      </div>
      <div class="price-range-slider-container">
        <vue-slider
          v-model="priceRange"
          :min="rangeSlider.min"
          :max="rangeSlider.max"
          :tooltip="rangeSlider.tooltip"
          :tooltip-formatter="rangeSlider.formatter"
          :enable-cross="rangeSlider.enableCross"
          :height="rangeSlider.height"
          :dot-size="rangeSlider.dotSize"
          class="price-range-slider"
        />
      </div>
      <div class="price-range-input-container">
        <div class="inner">
          <label for="price-start">
            <input id="price-start" v-model="priceRange[0]" type="text">
          </label>
          <span>至</span>
          <label for="price-end">
            <input id="price-end" v-model="priceRange[1]" type="text">
          </label>
        </div>
      </div>
    </div>
    <div class="filter-controls">
      <div class="inner">
        <div class="reset-btn" @click="filterReset">
          重設已選
        </div>
        <div class="search-btn" @click="search">
          搜尋
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filterMixin from '~/mixin/filter'
export default {
  name: 'HeaderFilterMobile',
  components: {
    FilterPanelMobile: () => import('~/components/layouts/Header/FilterPanelMobile')
  },
  mixins: [filterMixin],
  data () {
    return {
      activeTab: 0,
      tabs: ['科目', '地區', '上課時間', '價錢'],
      filterPanels: [
        {
          type: 'subjects',
          key1: 'level',
          key2: 'courses',
          colClass: 'subject-panel'
        },
        {
          type: 'locations',
          key1: 'area',
          key2: 'districts',
          colClass: 'location-panel'
        },
        {
          type: 'dates',
          key1: 'day',
          key2: 'times',
          colClass: 'date-panel'
        }
      ]
    }
  },
  methods: {
    tabToggle (index) {
      this.activeTab = index
      for (const layerContainer of document.querySelectorAll('.layers-container')) {
        layerContainer.classList.remove('extend')
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
  display: none;
  flex-direction: column;
  @media screen and (max-width: 1152px){
    display: flex;
  }
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
            cursor: pointer;
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
    .price-control-container {
      height: 54px;
      background-color: #35424F;
      .inner {
        height: 54px;
        width: 80%;
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 0 auto;
        .reset {
          width: 120px;
          height: 24px;
          border: 1.5px solid #FFFFFF;
          border-radius: 50px;
          font-size: 15px;
          line-height: 18px;
          color: #FFFFFF;
          text-align: center;
        }
      }
    }
    .price-range-slider-container {
      width: 70%;
      padding-top: 4rem;
      flex: 1;
      margin: 0 auto;
      .price-range-slider {
        /deep/ .vue-slider-dot-tooltip-inner {
          background-color: #212F3D;
          border-radius: 4px;
          font-weight: 600;
          line-height: 16px;
          border: none;
          &::after {
            border: none;
          }
        }
        /deep/ .vue-slider-dot-handle {
          border: 2px solid #C1C9D2;
        }
        /deep/ .vue-slider-process {
          background-color: #47F1B4;
        }
        /deep/ .vue-slider-rail {
          background-color: #E3E8EE;
          border-radius: 4px;
        }
      }
    }
    .price-range-input-container {
      width: 100%;
      height: 56px;
      margin-top: 1rem;
      .inner {
        width: 100%;
        padding: 10px 0 20px;
        height: 56px;
        display: flex;
        justify-content: center;
        color: white;
        input {
          width: 70px;
          height: 26px;
          background: #343A41;
          border: 1px solid #67717B;
          border-radius: 5px;
          color: white;
          font-size: 15px;
          line-height: 18px;
          padding-left: 0.5rem;
        }
        span {
          margin: 0 10px;
        }
      }
    }
  }
  .filter-controls {
    padding: 22px 0;
    .inner {
      width: 80%;
      height: 31px;
      display: flex;
      justify-content: flex-end;
      margin: 0 auto;
      .reset-btn {
        width: 102px;
        height: 28px;
        border: 1.5px solid #FFFFFF;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 1px;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
      }
      .search-btn {
        width: 66px;
        height: 28px;
        border: 1.5px solid $tutorsury-primary;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        padding-bottom: 1px;
        background: $tutorsury-primary;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        margin-left: 22px;
      }
    }
  }
}
</style>
