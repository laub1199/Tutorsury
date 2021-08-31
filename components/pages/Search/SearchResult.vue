<template>
  <div class="search-result">
    <div class="content">
      <div class="product-list d-flex">
        <div v-for="(item, index) in items" :key="index" class="product-item">
          <div class="product-wrapper">
            <nuxt-link :to="item.link" class="product-image">
              <img src="/media/Tutorsury_logo.png" alt="Logo" width="624" height="168">
            </nuxt-link>
            <nuxt-link :to="item.link">
              <div class="product-content">
                <div class="product-top">
                  <div class="product-logo-container">
                    <div class="product-logo">
                      <img src="/media/Tutorsury_logo.png" alt="Logo" height="168" width="624">
                    </div>
                  </div>
                  <div class="product-top-content">
                    <div class="details">
                      <p class="subject">
                        {{ item.subject }}
                      </p>
                      <p class="center-name">
                        {{ item.centre }}
                      </p>
                    </div>
                    <div class="districts">
                      <div v-for="(district, dIndex) in item.districts" :key="dIndex" class="district">
                        {{ district }}
                      </div>
                    </div>
                  </div>
                  <div class="star-container">
                    <img src="/media/elements/star.svg" alt="star" width="34" height="30">
                  </div>
                </div>
                <div class="product-courses">
                  <div v-for="(course, cIndex) in item.courses" :key="cIndex" class="course">
                    <p class="course-name">
                      {{ course.name }}
                    </p>
                    <div class="tags">
                      <p
                        v-for="(tag, tIndex) in course.tags"
                        :key="tIndex"
                        class="tag"
                        :class="{
                          'easy': tag === '輕鬆',
                          'make-up': tag === '補底',
                          'elite': tag === '拔尖',
                          'strict': tag === '嚴格'
                        }"
                      >
                        {{ tag }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="product-catalog">
                  <p class="price-range">
                    {{ item.price }}
                  </p>
                  <div class="more">
                    <span>查看更多</span>
                    <img src="/media/elements/arrow_right_extend.svg" alt="arrow right extend" width="22" height="16">
                  </div>
                </div>
              </div>
            </nuxt-link>
            <div class="product-bottom">
              <p class="discount">
                {{ item.discount }}
              </p>
              <img src="/media/elements/star.svg" alt="star" width="34" height="30">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.search-result {
  width: 100%;
  margin-top: 40px;
  a {
    text-decoration: none;
  }
  .content {
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    .product-list {
      flex-wrap: wrap;
      .product-item {
        display: flex;
        flex-direction: column;
        min-width: 331px;
        padding: 0 9px;
        margin-bottom: 125px;
        width: 25%;
        @media screen and (max-width: 1324px) {
          width: 33%;
        }
        @media screen and (max-width: 1010px) {
          width: 50%;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          margin-bottom: 30px;
        }
        .product-wrapper {
          border-radius: 20px;
          overflow: hidden;
          -webkit-box-shadow: 0 0 6px 6px rgba(0,0,0,0.1);
          box-shadow: 0 0 6px 6px rgba(0,0,0,0.1);
          text-decoration: none;
          .product-image {
            background-color: #212F3D;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3rem 10%;
            @media screen and (max-width: 768px) {
              display: none;
            }
            img {
              width: 100%;
              height: auto;
            }
          }
          .product-content {
            padding: 20px 20px 0;
            @media screen and (max-width: 768px) {
              padding: 20px 20px 10px;
            }
            .product-top {
              display: flex;
              @media screen and (max-width: 768px) {
                margin-bottom: 12px;
              }
              .product-logo-container {
                display: none;
                @media screen and (max-width: 768px) {
                  display: flex;
                  margin-right: 15px;
                }
                .product-logo {
                  display: flex;
                  background-color: #212F3D;
                  height: 60px;
                  width: 60px;
                  border-radius: 60px;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 80%;
                  }
                }
              }
              .product-top-content {
                display: flex;
                @media screen and (max-width: 768px) {
                  flex-direction: column;
                }
                .details {
                  flex: 1;
                  @media screen and (max-width: 768px) {
                    width: 100%;
                  }
                  .subject {
                    color: #55606E;
                    font-weight: bold;
                    font-size: 30px;
                    line-height: 35px;
                    margin-bottom: 0;
                    @media screen and (max-width: 768px) {
                      font-size: 22px;
                      line-height: 26px;
                    }
                  }
                  .center-name {
                    font-size: 20px;
                    line-height: 23px;
                    color: #343A41;
                    margin-bottom: 0;
                    @media screen and (max-width: 768px) {
                      font-size: 13px;
                      line-height: 15px;
                      margin-bottom: 8px;
                    }
                  }
                }
                .districts {
                  min-width: fit-content;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                  @media screen and (max-width: 768px) {
                    flex-direction: row;
                    width: 100%;
                  }
                  .district {
                    border: 1px solid #55606E;
                    box-sizing: border-box;
                    border-radius: 30px;
                    font-size: 14px;
                    line-height: 16px;
                    color: #55606E;
                    padding: 2px 8px;
                    margin-bottom: 5px;
                    @media screen and (max-width: 768px) {
                      margin: 0 5px 0 0;
                    }
                  }
                }
              }
              .star-container {
                display: none;
                width: 30px;
                align-items: flex-start;
                @media screen and (max-width: 768px) {
                  display: flex;
                }
                img {
                  width: 100%;
                }
              }
            }
            .product-courses {
              display: flex;
              flex-direction: column;
              width: 100%;
              .course {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 8px 20px;
                border: 1px solid #D4DBE1;
                border-radius: 5px;
                margin-bottom: 5px;
                .course-name {
                  font-weight: bold;
                  font-size: 18px;
                  line-height: 21px;
                  color: #55606E;
                  margin-bottom: 0;
                }
                .tags {
                  display: flex;
                  align-items: center;
                  .tag {
                    color: #FFFFFF;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 14px;
                    padding: 2px 5px;
                    border-radius: 30px;
                    margin-bottom: 0;
                    margin-left: 5px;
                    &.easy {
                      background-color: #26ACF7;
                    }
                    &.make-up {
                      background-color: #00D5A5;
                    }
                    &.elite {
                      background-color: #F1AC5B;
                    }
                    &.strict {
                      background-color: #F1605B;
                    }
                  }
                }
              }
            }
            .product-catalog {
              padding: 5px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .price-range {
                margin-bottom: 0;
                color: $tutorsury-primary;
                font-weight: bold;
                font-size: 20px;
                line-height: 30px;
              }
              .more {
                display: flex;
                align-items: center;
                span {
                  font-size: 12px;
                  line-height: 14px;
                  color: #55606E;
                }
                img {
                  padding: 3px;
                }
              }
            }
          }
          .product-bottom {
            border-top: 1px solid #D4DBE1;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 768px) {
              display: none;
            }
            .discount {
              font-weight: bold;
              font-size: 15px;
              line-height: 18px;
              color: #F8FCFF;
              margin-bottom: 0;
              padding: 7px 15px;
              background-color: $tutorsury-primary;
              border-radius: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
