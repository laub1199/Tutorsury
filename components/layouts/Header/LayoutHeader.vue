<template>
  <div class="layout-header">
    <HeaderTop />
    <HeaderFilter />
    <HeaderFilterMobile />
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  components: {
    HeaderTop: () => import('~/components/layouts/Header/HeaderTop'),
    HeaderFilter: () => import('~/components/layouts/Header/HeaderFilter'),
    HeaderFilterMobile: () => import('~/components/layouts/Header/HeaderFilterMobile')
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  position: fixed;
  width: 100%;
  z-index: 500;
  top: 0;
}
</style>
