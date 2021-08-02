<template>
  <div class="">
    <IndexHero />
    <IndexMap />
  </div>
</template>

<script>
import { metaTag } from '~/mixin/meta_head'
export default {
  name: 'Index',
  components: {
    IndexHero: () => import('~/components/pages/Index/IndexHero'),
    IndexMap: () => import('~/components/pages/Index/IndexMap')
  },
  mixins: [
    metaTag
  ]
}
</script>
