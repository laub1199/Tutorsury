<template>
  <div class="layout-footer">
    <div class="container">
      <FooterTop />
      <FooterLinks />
      <FooterBottom />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter',
  components: {
    FooterTop: () => import('~/components/layouts/Footer/FooterTop'),
    FooterLinks: () => import('~/components/layouts/Footer/FooterLinks'),
    FooterBottom: () => import('~/components/layouts/Footer/FooterBottom')
  }
}
</script>

<style lang="scss" scoped>
.layout-footer {
  background-color: $tutorsury-dark;
  width: 100%;
  padding-top: 81px;
}
</style>
