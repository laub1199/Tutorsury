<template>
  <div class="search-hero">
    <div class="container">
      <div class="content">
        <h1 class="result">
          搵到281個結果
        </h1>
        <p class="range">
          第1-12個結果：
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHero'
}
</script>

<style lang="scss" scoped>
.search-hero {
  background-image: url("/media/pages/search/top.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 234px;
  .content {
    padding-top: 80px;
    .result {
      font-weight: bold;
      font-size: 30px;
      line-height: 35px;
      color: #FFFFFF;
      margin-bottom: 0;
    }
    .range {
      color: #FFFFFF;
      font-size: 18px;
      line-height: 21px;
      padding-left: 8px;
    }
  }
}
</style>
