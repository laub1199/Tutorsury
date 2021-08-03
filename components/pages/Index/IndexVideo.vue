<template>
  <div class="index-video">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <img src="/media/pages/index/video.png" alt="video" height="305" width="495">
        </div>
        <div class="col-12 col-md-6">
          <div class="text text-center text-md-left">
            <h2>體驗影片</h2>
            <p>免費觀看教學短片</p>
            <p>安坐家中試堂毫無難度</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss" scoped>
.index-video {
  padding: 145px 0 110px;
  background-color: $tutorsury-primary;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 86%;
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
  img {
    @include media-breakpoint-down(sm) {
      transform: translate(13px, 0);
    }
  }
}
</style>
