/**
 * 商城 Vuex-actions
 */
export default{
  saveUserName(context, username){
    context.commit('saveUsername', username);
  },
  saveCartCount(context, count){
    context.commit('saveCartCount', count)
  }
}