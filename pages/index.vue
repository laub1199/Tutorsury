<template>
  <div class="">
    <IndexHero />
    <IndexMap />
    <IndexInfo />
    <IndexVideo />
  </div>
</template>

<script>
import { metaTag } from '~/mixin/meta_head'
export default {
  name: 'Index',
  components: {
    IndexHero: () => import('~/components/pages/Index/IndexHero'),
    IndexMap: () => import('~/components/pages/Index/IndexMap'),
    IndexInfo: () => import('~/components/pages/Index/IndexInfo'),
    IndexVideo: () => import('~/components/pages/Index/IndexVideo')
  },
  mixins: [
    metaTag
  ]
}
</script>
