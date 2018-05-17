import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations,
  // getters的作用类似于组件中的计算属性的作用，当我们需要根据state中的数据算出一些新的数据时，就可以借助getters，避免数据的冗余
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
