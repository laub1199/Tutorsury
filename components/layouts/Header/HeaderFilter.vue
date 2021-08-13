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
        <div v-for="(col, index) in filterColumns" :key="index" :class="col.colClass">
          <div class="layer-1">
            <ul class="list">
              <li
                v-for="(item, key1index) in filterDataWrapper[col.type]"
                :key="key1index" class="item"
                :class="{ 'chosen' : item[col.key1] === extendLayer[col.extendLayerKey] }"
                @click="extendLayer[col.extendLayerKey] = item[col.key1]"
              >
                <span class="d-flex">
                  {{ item[col.key1] }}
                  <span
                    v-if="filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length > 0 && filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length !== filterDataWrapper[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length"
                    class="chosen-num-display-inner"
                  >
                    {{ `（已選擇${filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length}項）` }}
                  </span>
                  <span
                    v-else-if="filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length === filterDataWrapper[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length"
                    class="chosen-num-display-inner"
                  >
                    {{ `（已全選）` }}
                  </span>
                  <img src="/media/elements/arrow_right.svg" alt="arrow right" width="8px" height="13px" class="arrow-right">
                  <img src="/media/elements/arrow_right_mint.svg" alt="arrow right" width="8px" height="13px" class="arrow-right-selected">
                </span>
                <span
                  v-if="filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length > 0 && filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length !== filterDataWrapper[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length"
                  class="chosen-num-display-outer"
                >
                  {{ `（已選擇${filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length}項）` }}
                </span>
                <span
                  v-else-if="filterChoice[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length === filterDataWrapper[col.type].find(obj => obj[col.key1] === item[col.key1])[col.key2].length"
                  class="chosen-num-display-outer"
                >
                  {{ `（已全選）` }}
                </span>
              </li>
            </ul>
          </div>
          <div class="layer-2">
            <div
              v-if="extendLayer[col.extendLayerKey] && !(filterChoice[col.type].find(obj => obj[col.key1] === extendLayer[col.extendLayerKey])[col.key2].length === filterDataWrapper[col.type].find(obj => obj[col.key1] === extendLayer[col.extendLayerKey])[col.key2].length)"
              class="choose-all"
              @click="filterSelectionHandler(col.type, col.key1, extendLayer[col.extendLayerKey], col.key2, 'all')"
            >
              全選
            </div>
            <div
              v-else-if="extendLayer[col.extendLayerKey]"
              class="choose-all-chosen"
              @click="filterSelectionHandler(col.type, col.key1, extendLayer[col.extendLayerKey], col.key2, 'all')"
            >
              取消全選
            </div>
            <ul class="list">
              <li v-if="!extendLayer[col.extendLayerKey]">
                請選取級別
              </li>
              <li
                v-for="(item, key2index) in filterDataWrapper[col.type].find(obj => obj[col.key1] === extendLayer[col.extendLayerKey])[col.key2]"
                v-else
                :key="key2index"
                class="item"
                :class="{ 'chosen' : filterChoice[col.type].find(obj => obj[col.key1] === extendLayer[col.extendLayerKey])[col.key2].includes(item) }"
                @click="filterSelectionHandler(col.type, col.key1, extendLayer[col.extendLayerKey], col.key2, item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="price-col">
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
import filterMixin from '~/mixin/filter'
export default {
  name: 'HeaderFilter',
  mixins: [filterMixin],
  data () {
    return {
      extendLayer: {
        subject: '',
        location: '',
        date: ''
      },
      filterColumns: [
        {
          extendLayerKey: 'subject',
          type: 'subjects',
          key1: 'level',
          key2: 'courses',
          colClass: 'subject-col'
        },
        {
          extendLayerKey: 'location',
          type: 'locations',
          key1: 'area',
          key2: 'districts',
          colClass: 'location-col'
        },
        {
          extendLayerKey: 'date',
          type: 'dates',
          key1: 'day',
          key2: 'times',
          colClass: 'time-col'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-filter {
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1152px){
    display: none;
  }
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
    .item {
      display: flex;
      @media screen and (max-width: 1551px) {
        flex-direction: column;
      }
      .chosen-num-display-inner {
        display: block;
        @media screen and (max-width: 1551px) {
          display: none;
        }
      }
      .chosen-num-display-outer {
        display: none;
        @media screen and (max-width: 1551px) {
          display: block;
        }
      }
    }
  }
  .location-col {
    width: 21%;
    display: flex;
    @include media-breakpoint-down(md) {
      width: 17%;
    }
    .item {
      display: flex;
      @media screen and (max-width: 1551px) {
        flex-direction: column;
      }
      .chosen-num-display-inner {
        display: block;
        @media screen and (max-width: 1551px) {
          display: none;
        }
      }
      .chosen-num-display-outer {
        display: none;
        @media screen and (max-width: 1551px) {
          display: block;
        }
      }
    }
  }
  .time-col {
    width: 25%;
    display: flex;
    .item {
      display: flex;
      @media screen and (max-width: 1700px) {
        flex-direction: column;
      }
      .chosen-num-display-inner {
        display: block;
        @media screen and (max-width: 1700px) {
          display: none;
        }
      }
      .chosen-num-display-outer {
        display: none;
        @media screen and (max-width: 1700px) {
          display: block;
        }
      }
    }
  }
  .price-col {
    width: 17%;
    display: flex;
    flex-direction: column;
    .price-range-slider-container {
      width: 100%;
      padding-top: 3rem;
      flex: 1;
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
