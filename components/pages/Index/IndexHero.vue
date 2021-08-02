<template>
  <div class="index-hero">
    <img src="/media/pages/index/hero-background.png" alt="background" height="717" width="759" class="background">
    <img src="/media/pages/index/hero-image.png" alt="side image" height="725" width="947" class="side-image">
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
  @media (max-width: 1490px) {
    height: 750px;
  }
  .background {
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.5s;
    @media screen and (max-width: 1660px) {
      max-width: 35%;
    }
    @media screen and (max-width: 1200px) {
      max-width: 30%;
    }
  }
  .side-image {
    position: absolute;
    top: 64px;
    right: 50px;
    max-width: 100%;
    transition: all 0.5s;
    @media screen and (max-width: 1660px) {
      max-width: 65%;
    }
    @media screen and (max-width: 1600px) {
      top: 290px;
      max-width: 50%;
      right: 50px;
    }
    @media screen and (max-width: 1200px) {
      max-width: 600px;
    }
  }
  .bottom {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    .title {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 72px;
      line-height: 84px;
      margin-bottom: 1rem;
    }
    .subtitle {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      margin-bottom: 3rem;
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
      p {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 40px;
        line-height: 20px;
        margin: 0;
        padding-bottom: 5px;
      }
    }
  }
}
</style>
