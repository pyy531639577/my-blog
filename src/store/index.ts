import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

Vue.use(Vuex)

let tipsTimer:any = ''

export default new Vuex.Store({
  state: {
    tips: '',
    tipsUpdateAt: '',
    totalCount: 0
  },
  mutations: {
    // 设置一言
    setTips: (state:any, { tips, tipsUpdateAt }:any) => {
      state.tips = tips
      state.tipsUpdateAt = tipsUpdateAt
    },
    setTotalCount: (state:any, { totalCount }:any) => {
      state.totalCount = totalCount
    }
  },
  actions: {
    // 显示一言
    async showTips ({ commit }:any, { tips }:any) {
      clearTimeout(tipsTimer)
      let tipsUpdateAt = new Date()
      commit('setTips', {
        tips,
        tipsUpdateAt
      })
      tipsTimer = setTimeout(() => {
        commit('setTips', {
          tips: '',
          tipsUpdateAt: new Date()
        })
      }, 6000)
    }
  }
})
