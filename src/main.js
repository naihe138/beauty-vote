import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';
Vue.use(VueRouter);
Vue.use(Element);
import 'element-ui/lib/theme-default/index.css';

import App from './App';
import test from './components/test.vue';
import index from './components/index.vue';
// const index = resolve => require(['./components/index.vue'], resolve);
import signUp from './components/signUp.vue';
// const signUp = resolve => require(['./components/signUp.vue'], resolve);
import introduce from './components/introduce.vue';
import allDetail from './components/allDetail.vue';
import detail from './components/detail.vue';
import store from './store/store';
const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/test',
    component: test
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: introduce
  },
  {
    path: '/allDetail',
    name: 'allDetail',
    component: allDetail
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }
];
const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
}).$mount('#app');
