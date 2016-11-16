/**
 * @file
 * @author 何文林
 * @date 16/10/31
 */

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_ROOT = 'http://127.0.0.1:1234';

// const articleResource = Vue.resource(API_ROOT + 'articles{/id}{/controller}');
// const usersResource = Vue.resource(API_ROOT + 'users{/id}');
// const adminResource = Vue.resource(API_ROOT + 'admin{/id}');

const APIS = {
  API_ROOT,
  login (opts) {
    // return articleResource.get({id: id})
    return Vue.http.post(API_ROOT + '/login', opts);
  },
  register (opts) {
    return Vue.http.post(API_ROOT + '/register', opts);
  },
  // 报名
  enter (opts) {
    return Vue.http.post(API_ROOT + '/enter', opts);
  },
  // 获取报名列表
  getList () {
    return Vue.http.get(API_ROOT + '/getList');
  },
  // 获取某一个详情
  getDetail (id) {
    console.log(id);
    return Vue.http.get(API_ROOT + '/getDetail?id=' + id);
  },
  //  投票动作
  toTickit (opts) {
    return Vue.http.post(API_ROOT + '/toTickit', opts);
  }
};

export default APIS;
