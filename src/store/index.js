import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: '', // 登录用0
  cartCount: 0 // 购物车商品数量
}
export default new Vuex.Store({
  state
})