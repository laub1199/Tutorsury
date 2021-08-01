<template>
  <div class="layout-header">
    <HeaderTop />
    <HeaderFilter />
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  components: {
    HeaderTop: () => import('~/components/layouts/Header/HeaderTop'),
    HeaderFilter: () => import('~/components/layouts/Header/HeaderFilter')
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
}
</style>
