<template>
  <div class="footer-links">
    <nuxt-link to="/about-us">
      關於我們
    </nuxt-link>
    <nuxt-link to="/privacy">
      私隱政策
    </nuxt-link>
    <nuxt-link to="/terms">
      條款細則
    </nuxt-link>
    <nuxt-link to="/contact-us">
      聯絡我們
    </nuxt-link>
    <nuxt-link to="/blog">
      專欄網誌
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks'
}
</script>

<style lang="scss" scoped>
.footer-links {
  width: 100%;
  display: flex;
  @include media-breakpoint-down(sm) {
    flex-direction: column;
    margin-top: 3rem;
  }
  a {
    flex: 1;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    padding: 30px 0;
    text-align: center;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
