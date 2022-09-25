import Vue from "vue";
import Vuex from "vuex";
import { setToken, getToken , setUseInfo ,getUserInfo,removeTokenAndUserInfo} from "../utils/auth";
import { login, userInfo,Logout} from "../api/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    userInfo:getUserInfo() || "",
    
  },
  getters: {
    token(state){
      return state.token
    }, 
    userInfo(state){
      return state.userInfo
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      setToken(token)
    },
    SET_USER_INFO(state,userInfo){
      state.userInfo = userInfo
      setUseInfo(userInfo)
    }
  },
  actions: {
    /**
     * 登录功能
     * @param {*} param0 
     * @param {*} loginForm 
     * @returns 
     */
    async login({commit},loginForm){
     try{
      const response = await login(loginForm)
       commit("SET_TOKEN",response.token)
       return response.token
     }catch (e){
       console.log(e.message)
     }
    },
    /**
     * 获取用户信息
     * @param {*} param0 
     * @returns 
     */
    async handelUserInfo({commit}){
      try{
        const userinfo = await userInfo()
        commit("SET_USER_INFO",userinfo) 
        return userinfo
      }catch(e){
        console.log(e.message);
      }
    },
    // DIS_SET_TOKEN({ commit }, token) {
    //   commit("SET_TOKEN", token);
    // },
    // DIS_SET_USER_INFO({commit},userInfo){
    //   commit("SET_USER_INFO",userInfo)
    // }
  /**
   * 退出登录
   * @param {*} param0 
   */
    async handleLogout({commit}){
        const response = await Logout()
        commit("SET_TOKEN","")
        commit(" SET_USER_INFO","")
        return response
        console.log(response)
    }
  },
  modules: {

  },
});
