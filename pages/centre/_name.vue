<template>
  <div class="centre-page">
    <CentreHero />
    <CentreInfoHero :centre-info="centre" />
  </div>
</template>

<script>
export default {
  name: 'CentrePage',
  components: {
    CentreHero: () => import('~/components/pages/Centre/CentreHero'),
    CentreInfoHero: () => import('~/components/pages/Centre/CentreInfoHero')
  },
  data () {
    return {
      centre: {
        name: 'Tutorsury Ed-centre',
        number: '12345678',
        address: '九龍',
        facebook: 'tutorsury',
        instagram: 'tutorsury'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.centre-page {
}
</style>
