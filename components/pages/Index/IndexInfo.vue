<template>
  <div class="index-info">
    <div class="content">
      <div class="text">
        <h2>一覽無遺</h2>
        <p>補習資訊盡數列明</p>
        <p>是否合適</p>
        <p>一目了然</p>
      </div>
      <div class="image-container">
        <img src="/media/pages/index/info.png" alt="info" width="468" height="323">
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
.index-info {
  display: flex;
  position: relative;
  padding-bottom: 5rem;
  background-color: #A6EDE7;
  flex-direction: row-reverse;
  @media screen and (min-width: 125rem) {
    height: calc(377px + (100vw - 2000px) / 10);
  }
  .content {
    width: 52%;
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 85.5rem){
      width: 100%;
      justify-content: flex-end;
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
    .image-container {
      margin-left: 5rem;
      img {
        transform: translateY(-10px);
      }
    }
  }
}
</style>
