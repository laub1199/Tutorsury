<template>
  <main>
    <LayoutHeader />
    <section id="wrapper">
      <nuxt-child />
    </section>
    <LayoutFooter />
  </main>
</template>

<script>
export default {
  components: {
    LayoutHeader: () => import('~/components/layouts/Header/LayoutHeader'),
    LayoutFooter: () => import('~/components/layouts/Footer/LayoutFooter')
  }
}

</script>

<style lang="scss">
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  #wrapper {
    // add margin-top for header;
    flex: 1;
  }
}
.main-wrapper {
  max-width: 1440px;
  margin: auto;
}
</style>
