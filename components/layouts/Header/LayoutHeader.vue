<template>
  <div class="layout-header">
    <HeaderTop />
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  components: {
    HeaderTop: () => import('~/components/layouts/Header/HeaderTop')
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
}
</style>
