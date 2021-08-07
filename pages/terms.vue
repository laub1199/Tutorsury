<template>
  <div class="terms">
    <div class="hero">
      <img src="/media/pages/statics/hero-left.png" alt="hero left" width="680" height="284" class="hero-background-left">
      <img src="/media/pages/statics/hero-right.png" alt="hero right" width="656" height="284" class="hero-background-right">
      <h1 class="title">
        條款細則
      </h1>
    </div>
    <div class="container content">
      <div class="section">
        <h2>1. 一般規定</h2>
        <p>1.1    用戶使用本公司所提供的服務前，有責任清楚了解＜條款細則＞的內容。</p>
        <p>1.2    在用戶表明同意之情況下，本公司可向用戶發送直銷信息。若用戶拒絕接收直銷信息，客戶需電郵至info@tutorsury.com聯絡本公司，向本公司作出通知。</p>
        <p>1.3    如私補教師因冒用或盜用任何第三者之資料而引致本公司或其他第三者有任何損害，私補習教師須負上一切相關損失、損毀或責任，並對本公司或其他第三者因此所承受的任何損害作出彌償及使其免於損害。</p>
      </div>
      <div class="section">
        <h2>2. 用戶守則</h2>
        <p>2.1    如用戶在本網站上發佈不當言論，(其中包括但不限於仇恨言論、廣告滋擾或其他影響他人的言論，無論是否與前述者相似)，本公司保留註銷其帳戶的權利。</p>
      </div>
      <div class="section">
        <h2>3. 條款細則的變更</h2>
        <p>3.1   本公司保留權利，可按其絕對酌情權修改本條款細則。客人須自行負責在確認任何申請前先查閱本條款及細則。申請一經發出，顧客即須視作已接受當時有效的條款細則。</p>
        <p>3.2   若就以上條款有任何爭議， 本公司保留最終決定權。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms'
}
</script>

<style lang="scss" scoped>
.terms {
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
    padding-top: 100px;
    padding-bottom: 100px;
    .section {
     margin-bottom: 50px;
    }
    h2 {
      font-weight: bold;
      font-size: 30px;
      line-height: 35.16px;
      color: #343A41;
      margin-bottom: 15px;
    }
    p {
      font-size: 15px;
      line-height: 17.58px;
      color: #343A41;
      margin-bottom: 15px;
    }
  }
}
</style>
