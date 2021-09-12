<template>
  <div class="centre-info-hero">
    <div class="container">
      <div class="info-hero-wrapper">
        <div class="logo-container" :style="{'background-color': centreInfo.color || '#212F3D'}">
          <img :src="centreInfo.logo || '/media/Tutorsury_logo.png'" alt="Logo" width="624" height="168">
        </div>
        <div class="info">
          <div class="top">
            <h1>{{ centreInfo.name }}</h1>
            <div class="star-container">
              <img src="/media/elements/star.svg" alt="star" height="30" width="34">
            </div>
            <div class="buttons">
              <div class="button contact">
                <p>查詢</p>
                <img src="/media/elements/message.svg" alt="message" width="19" height="19">
              </div>
              <div class="button share">
                <p>分享</p>
                <img src="/media/elements/share.svg" alt="share" width="20" height="21">
              </div>
            </div>
          </div>
          <p>電話：{{ centreInfo.number }}</p>
          <p>地址：{{ centreInfo.address }}</p>
          <div class="social-media">
            <a :href="`https://facebook.com/${centreInfo.facebook}`">
              <img src="/media/social-media/facebook_origin.png" alt="facebook" width="26" height="26">
            </a>
            <a :href="`https://instagram.com/${centreInfo.instagram}`">
              <img src="/media/social-media/instagram_origin.png" alt="instagram" width="26" height="26">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CentreInfoHero',
  props: {
    centreInfo: {
      type: () => Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.centre-info-hero {
  padding: 50px 0;
  .info-hero-wrapper {
    display: flex;
    .logo-container {
      width: 444px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      img {
        width: 62%;
      }
    }
    .info {
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        h1 {
          margin: 0 15px 0 0;
          font-size: 36px;
          line-height: 42px;
          color: #343A41;
        }
        .star-container {
          flex: 1;
          padding-top: 3px;
          img {
            cursor: pointer;
          }
        }
        .buttons {
          display: flex;
          .button {
            width: 88px;
            background-color: #55606E;
            padding: 7.5px 9px;
            display: flex;
            border-radius: 8px;
            margin-right: 15px;
            height: fit-content;
            cursor: pointer;
            p {
              font-weight: bold;
              font-size: 20px;
              line-height: 23px;
              color: #FFFFFF;
              margin: 0 10px 0 0;
            }
          }
        }
      }
      > p {
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #343A41;
        margin: 0;
      }
      .social-media {
        margin-top: 21px;
        a {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
