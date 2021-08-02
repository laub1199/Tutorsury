<template>
  <div class="index-map">
    <img src="/media/pages/index/map-bottom.svg" alt="bottom" width="1895" height="292" class="bottom">
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
  .bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .content {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 85.5rem){
      width: 100%;
      justify-content: flex-start;
      padding-left: 1rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      padding-top: 5rem;
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
    }
  }
}
</style>
