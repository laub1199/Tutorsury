// =========================================================== //
//                                                             //
//                          pending                            //
//                      meta saving logic                      //
//            title description keywords slug image            //
//                                                             //
// =========================================================== //
export const metaTag = {
  head () {
    return {
      htmlAttrs: {
        lang: 'zh'
      },
      title: this.getMeta('title'),
      meta: [
        { name: 'IE=edge', 'http-equiv': 'X-UA-Compatible' },
        { 'http-equiv': 'Content-Language', content: 'zh' },
        { hid: 'description', name: 'description', content: this.getMeta('description') },
        { hid: 'keywords', name: 'keywords', content: this.getMeta('keywords') },
        ...this.getOg()
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', content: `${process.env.BASE_URL}/slug` },
        ...this.getHrefLink()
      ]
    }
  },
  methods: {
    getMeta (field) {
      return ''
    },
    getHrefLink () {
      return [
        { rel: 'alternate', href: `${process.env.BASE_URL}/slug`, hreflang: 'x-default' },
        {
          rel: 'alternate',
          href: `${process.env.BASE_URL}/slug`,
          hreflang: 'zh'
        }
      ]
    },
    getOg () {
      return [
        { hid: 'og:site_name', name: 'og:site_name', content: 'Tutorsury' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', name: 'og:title', content: this.getMeta('title') },
        { hid: 'og:description', name: 'og:description', content: this.getMeta('description') },
        { hid: 'og:keywords', name: 'og:keywords', content: this.getMeta('keywords') },
        { hid: 'og:url', name: 'og:url', content: `${process.env.BASE_URL}/slug` },
        { hid: 'og:img', name: 'og:img', content: `${process.env.BASE_URL}/media/logo.png` }
      ]
    }
  }
}
