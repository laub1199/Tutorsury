<template>
  <div class="footer-top">
    <div class="logo-container">
      <nuxt-link to="/">
        <img src="/media/Tutorsury_logo.png" alt="Logo" width="150px" height="37.6px">
      </nuxt-link>
    </div>
    <div class="social-media">
      <a href="/" style="padding: 6px">
        <img src="/media/social-media/LinkedIn.svg" alt="LinkedIn" width="20px" height="20px">
      </a>
      <a href="/" style="padding: 5px">
        <img src="/media/social-media/Instagram.svg" alt="Instagram" width="30px" height="30px">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterTop'
}
</script>

<style lang="scss" scoped>
.footer-top {
  width: 100%;
  border-bottom: 1px solid #343A41;
  display: flex;
  padding-bottom: 15px;
  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
  .logo-container {
    display: flex;
    flex: 1;
    @include media-breakpoint-down(sm) {
      justify-content: center;
    }
  }
  .social-media {
    display: flex;
    @include media-breakpoint-down(sm) {
      justify-content: center;
    }
  }
}
</style>
