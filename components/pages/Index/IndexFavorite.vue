<template>
  <div class="index-favorite">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="text">
            <h2>精選收藏</h2>
            <p>心儀補習社任意收藏</p>
            <p>容後再次找回</p>
          </div>
        </div>
        <div class="col-6">
          <img src="/media/pages/index/tutorial-center.png" alt="video" height="309" width="410">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexFavorite'
}
</script>

<style lang="scss" scoped>
.index-favorite {
  padding: 145px 0 110px;
  background-color: #212F3D;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 235px;
    height: 100%;
    float: right;
    padding-top: 3rem;
    margin-right: 5rem;
    h2 {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
    }
    p {
      color: #FFFFFF;
      margin: 0;
      font-size: 25px;
      line-height: 29px;
    }
  }
}
</style>
