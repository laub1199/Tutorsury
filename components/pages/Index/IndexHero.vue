<template>
  <div class="index-hero">
    <img src="/media/pages/index/hero-background.png" alt="background" height="717" width="759" class="background d-none d-md-block">
    <img src="/media/pages/index/hero-image.png" alt="side image" height="725" width="947" class="side-image d-none d-md-block">
    <img src="/media/pages/index/hero-bottom.svg" alt="bottom" height="254" width="1920" class="bottom">
    <div class="content">
      <h1 class="title">
        最強補習社資訊平台
      </h1>
      <h2 class="subtitle">
        為你開創補習新時代
      </h2>
      <div class="get-started">
        <p>立即開始</p>
      </div>
    </div>
    <div class="hero-bottom d-block d-md-none">
      <img src="/media/pages/index/hero-middle-mobile.svg" alt="middle background" height="132" width="768" class="w-100 middle-background">
      <div class="image-container">
        <img src="/media/pages/index/hero-image.png" alt="mobile image" height="725" width="947">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHero'
}
</script>

<style lang="scss" scoped>
.index-hero {
  background-color: #212F3D;
  padding: 200px 0 300px;
  position: relative;
  height: 840px;
  overflow: hidden;
  @media (max-width: 90rem) {
    height: 750px;
  }
  @include media-breakpoint-down(sm) {
    height: auto;
    padding: 3rem 0 0;
  }
  .background {
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.5s;
    @media screen and (max-width: 103.75rem) {
      max-width: 35%;
    }
    @media screen and (max-width: 75rem) {
      max-width: 30%;
    }
  }
  .side-image {
    position: absolute;
    top: 64px;
    right: 50px;
    max-width: 100%;
    transition: all 0.5s;
    @media screen and (max-width: 103.75rem) {
      max-width: 65%;
    }
    @media screen and (max-width: 103.75rem) {
      top: 290px;
      max-width: 50%;
      right: 50px;
    }
    @media screen and (max-width: 75rem) {
      max-width: 600px;
    }
  }
  .bottom {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    z-index: 2;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    @include media-breakpoint-down(sm) {
      padding: 0 2rem 2rem;
    ;
    }
    .title {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 72px;
      line-height: 84px;
      margin-bottom: 1rem;
      @include media-breakpoint-down(sm) {
        text-align: center;
        font-size: 50px;
        line-height: 65px;
      }
    }
    .subtitle {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      margin-bottom: 3rem;
      @include media-breakpoint-down(sm) {
        text-align: center;
        font-size: 24px;
        line-height: 28px;
      }
    }
    .get-started {
      cursor: pointer;
      width: 205px;
      height: 62px;
      background-color: $tutorsury-primary;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      @include media-breakpoint-down(sm) {
        margin: auto;
        width: 100%;
        height: 48px;
      }
      p {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 40px;
        line-height: 20px;
        margin: 0;
        padding-bottom: 5px;
        @include media-breakpoint-down(sm) {
          font-size: 20px;
          line-height: 23px;
        }
      }
    }
  }
  .hero-bottom {
    position: relative;
    width: 100%;
    display: flex;
    background-color: $tutorsury-primary;
    flex-direction: column;
    .middle-background {
      transform: translateY(-2px);
    }
    .image-container {
      width: 100%;
      text-align: center;
      img {
        max-width: 80%;
        margin: auto;
      }
    }
  }
}
</style>
