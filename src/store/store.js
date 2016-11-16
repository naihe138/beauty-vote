/**
 * @file
 * @author 何文林
 * @date 16/10/24
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import * as actions from './action';
const state = {
  username: '',
  list: [],
  detail: {}
};

const mutations = {
  LOGIN (state, username) {
    state.username = username;
  },
  GET_LIST (state, list) {
    state.list = list;
  },
  GET_DETAIL (state, detail) {
    state.detail = detail;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
