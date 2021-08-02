<template>
  <div class="">
    <IndexHero />
  </div>
</template>

<script>
import { metaTag } from '~/mixin/meta_head'
export default {
  name: 'Index',
  components: {
    IndexHero: () => import('~/components/pages/Index/IndexHero')
  },
  mixins: [
    metaTag
  ]
}
</script>
