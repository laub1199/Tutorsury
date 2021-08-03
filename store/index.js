import { ssrLog } from '@/common/utils'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  nuxtServerInit (store, context) {
    const date1 = new Date()
    const requestUrl = context.route.path

    ssrLog('---------------------------------------------')
    ssrLog('[NuxtServerInit] Request Url: ' + requestUrl)

    ssrLog('[NuxtServerInit] Total Spend time : ' + (new Date().getTime() - date1.getTime()) / 1000)
  }
}

export const getters = {
}
