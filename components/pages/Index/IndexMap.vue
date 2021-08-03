<template>
  <div class="index-map">
    <img src="/media/pages/index/map-bottom.svg" alt="bottom" width="1895" height="292" class="bottom d-none d-md-block">
    <div class="content">
      <div class="image-container">
        <img src="/media/pages/index/map.png" alt="map" width="406" height="297">
      </div>
      <div class="text">
        <h2>資訊無界</h2>
        <p>１８區補習社雲集</p>
        <p>安坐家中瀏覽毫無難度</p>
      </div>
    </div>
    <img src="/media/pages/index/map-bottom-mobile.svg" alt="bottom mobile" width="768" height="626" class="d-block d-md-none bottom-mobile">
  </div>
</template>

<script>
export default {
  name: 'IndexMap'
}
</script>

<style lang="scss" scoped>
.index-map {
  display: flex;
  position: relative;
  padding-bottom: 5rem;
  @media screen and (min-width: 125rem) {
    height: calc(377px + (100vw - 2000px) / 10);
  }
  @include media-breakpoint-down(sm) {
    flex-direction: column;
    padding-bottom: 0;
  }
  .bottom {
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: 0;
  }
  .bottom-mobile {
    @include media-breakpoint-down(sm) {
      transform: translateY(2px);
    }
  }
  .content {
    width: 52%;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 85.5rem){
      width: 100%;
      justify-content: flex-start;
      padding-left: 1rem;
    }
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
    .image-container {
      @include media-breakpoint-down(sm) {
        width: 100%;
        text-align: center;
        margin-top: 2rem;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      padding-top: 5rem;
      min-width: 200px;
      h2 {
        color: #343A41;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
      }
      p {
        color: #343A41;
        margin: 0;
        font-size: 25px;
        line-height: 29px;
      }
      @include media-breakpoint-down(sm) {
        width: 100%;
        text-align: center;
        padding: 0 0 2rem;
      }
    }
  }
}
</style>
