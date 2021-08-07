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
    margin-top: 107px;
    flex: 1;
    @media screen and (max-width: 1152px){
      margin-top: 70px;
    }
  }
}
</style>
