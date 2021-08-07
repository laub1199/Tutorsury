<template>
  <div class="contact-us">
    <div class="hero">
      <img src="/media/pages/statics/hero-left.png" alt="hero left" width="680" height="284" class="hero-background-left">
      <img src="/media/pages/statics/hero-right.png" alt="hero right" width="656" height="284" class="hero-background-right">
      <h1 class="title">
        私隱政策
      </h1>
    </div>
    <div class="container">
      <div class="d-flex content">
        <div class="card-container">
          <div class="contact-methods d-flex flex-column">
            <h2 class="text-center">
              我們的聯絡方式
            </h2>
            <div class="d-flex justify-content-around flex-column flex-md-row">
              <div class="contact-method mb-4 mb-md-0">
                <div class="image-container text-center">
                  <img src="/media/pages/statics/email.svg" alt="email" height="55" width="55" class="email-svg">
                </div>
                <p class="text-center">
                  我們樂意解答您的提問
                </p>
                <p class="text-center">
                  info@tutorsury.com
                </p>
              </div>
              <div class="contact-method">
                <div class="image-container text-center">
                  <img src="/media/pages/statics/whatsapp.svg" alt="whatsapp" height="55" width="55" class="whatsapp-svg">
                </div>
                <p class="text-center">
                  我們歡迎您的Whatsapp查詢
                </p>
                <p class="text-center">
                  53356611
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="contact d-flex flex-column">
            <h2 class="text-center">
              成為我們的補習社
            </h2>
            <p class="text-center">
              獲得宣傳機會，助你找尋更多學生
            </p>
            <label for="center-name">
              <input id="center-name" type="text" placeholder="補習社名稱">
            </label>
            <label for="center-email">
              <input id="center-email" type="text" placeholder="電郵地址">
            </label>
            <label for="center-number">
              <input id="center-number" type="text" placeholder="聯絡電話">
            </label>
            <div class="d-flex mt-4 justify-content-center">
              <div class="submit">
                提交
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style lang="scss" scoped>
.contact-us {
  .hero {
    width: 100%;
    height: 300px;
    background-color: #212F3D;
    padding-top: 110px;
    position: relative;
    .hero-background-left {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      @media screen and (max-width: 1340px){
        display: none;
      }
    }
    .hero-background-right {
      position: absolute;
      height: 100%;
      top: 0;
      right: 0;
      @media screen and (max-width: 1340px){
        display: none;
      }
    }
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #FFFFFF;
      font-weight: bold;
      font-size: 60px;
      line-height: 70px;
      text-align: center;
      width: 242px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
    }
    .contact-methods {
      padding: 30px 0 80px;
      box-shadow: 5px 5px 25px rgba(33, 47, 61, 0.25);
      border-radius: 20px;
      margin-top: 125px;
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 35.16px;
        color: #35424F;
        margin-bottom: 65px;
      }
      .image-container {
        margin-bottom: .75rem;
      }
      p {
        margin: 0 50px;
        font-size: 18px;
        line-height: 21px;
        color: #35424F;
      }
    }
    .contact {
      padding: 30px;
      box-shadow: 5px 5px 25px rgba(33, 47, 61, 0.25);
      border-radius: 20px;
      margin-top: 95px;
      margin-bottom: 90px;
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 35.16px;
        color: #35424F;
        margin-bottom: 15px;
      }
      p {
        margin-bottom: 30px;
        font-size: 20px;
        line-height: 23px;
        color: #35424F;
      }
      input {
        color: #979FA5;
        width: 100%;
        height: 36px;
        padding-left: 18px;
        font-size: 22px;
        line-height: 26px;
        margin-bottom: 10px;
        border-radius: 30px;
        border: 1.2px solid #979FA5;
      }
      .submit {
        font-size: 30px;
        line-height: 35px;
        font-weight: bold;
        color: #FFFFFF;
        background-color: $tutorsury-primary;
        padding: 5px 30px;
        border-radius: 50px;
      }
    }
  }
}
</style>
