<template>
  <div class="filter-panel-mobile">
    <div v-for="(item, index) in filterDataWrapper[type]" :key="index" class="layers-container" @click="layerToggle({ e: $event})">
      <div class="layer-1">
        <div class="inner">
          <div class="left">
            {{ item[key1] }}
            <img src="/media/elements/arrow_down.svg" alt="arrow down" height="8" width="13" class="arrow arrow-down">
            <img src="/media/elements/arrow_up.svg" alt="arrow up" height="8" width="13" class="arrow arrow-up">
          </div>
          <div class="right">
            <span
              v-if="filterChoice[type].find(obj => obj[key1] === item[key1])[key2].length !== filterDataWrapper[type].find(obj => obj[key1] === item[key1])[key2].length"
              class="choose-all"
              @click.stop
              @click="layerToggle({ e: $event, keyVal: item[key1], val: 'all' })"
            >
              全選
            </span>
            <span
              v-else
              class="choose-all-chosen"
              @click.stop
              @click="layerToggle({ e: $event, keyVal: item[key1], val: 'all' })"
            >
              取消全選
            </span>
          </div>
        </div>
      </div>
      <div class="layer-2">
        <div class="inner">
          <div
            v-for="(val, indexVal) in item[key2]"
            :key="indexVal"
            :class="{ 'chosen' : filterChoice[type].find(obj => obj[key1] === item[key1])[key2].includes(val) }"
            @click.stop
            @click="layerToggle({ keyVal: item[key1], val })"
          >
            {{ val }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterPanelMobile',
  props: {
    type: {
      default: '',
      type: String
    },
    key1: {
      default: '',
      type: String
    },
    key2: {
      default: '',
      type: String
    },
    filterDataWrapper: {
      default: null,
      type: Object
    },
    filterChoice: {
      default: null,
      type: Object
    },
    filterSelectionHandler: {
      default: null,
      type: Function
    }
  },
  methods: {
    layerToggle (trigger) {
      console.log(trigger)
      if (trigger && trigger.e) {
        if (!trigger.e.target.closest('.layers-container').classList.contains('extend')) {
          for (const layerContainer of document.querySelectorAll('.layers-container')) {
            layerContainer.classList.remove('extend')
          }
          trigger.e.target.closest('.layers-container').classList.add('extend')
        } else if (trigger.val !== 'all') {
          for (const layerContainer of document.querySelectorAll('.layers-container')) {
            layerContainer.classList.remove('extend')
          }
        }
      }
      if (trigger.val) {
        this.filterSelectionHandler(this.type, this.key1, trigger.keyVal, this.key2, trigger.val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-panel-mobile {
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
}
</style>
