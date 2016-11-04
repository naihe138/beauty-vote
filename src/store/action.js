/**
 * @file
 * @author 何文林
 * @date 16/10/24
 */

import APIS from '../api/index';

// export const increment = ({ commit }) => commit('INCREMENT');
// export const decrement = ({ commit }) => commit('DECREMENT');

//  登录
export const islLogin = ({ commit }, username) => {
  commit('LOGIN', username);
};

export const getList = ({ commit }) => {
  APIS.getList().then(res => {
    console.log(res);
    commit('GET_LIST', res.body.data);
  }).catch(err => {
    console.log(err);
  });
};
export const getDetail = ({ commit }, id) => {
  APIS.getDetail(id).then(res => {
    console.log(res);
    commit('GET_DETAIL', res.body.data);
  }).catch(err => {
    console.log(err);
  });
};
