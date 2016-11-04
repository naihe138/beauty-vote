<template>
  <div id="main">
    <el-row class="bg-purple-dark">
      <el-col :span="4">
        <div class="grid-content bg-purple-light logo">logo投票</div>
      </el-col>
      <el-col :span="20">
        <el-menu :default-active="navActive" mode="horizontal">
          <router-link to="/">
            <el-menu-item index="1">首页</el-menu-item>
          </router-link>
          <router-link to="/signUp">
            <el-menu-item index="2">报名</el-menu-item>
          </router-link>
          <router-link to="/allDetail">
            <el-menu-item index="3">全部详情</el-menu-item>
          </router-link>
          <router-link to="/introduce">
            <el-menu-item index="4">报名介绍</el-menu-item>
          </router-link>
          <template v-if="isLogin">
            <el-menu-item index="5" style="float: right" @click.native="showLogin">登陆</el-menu-item>
            <el-menu-item index="6" style="float: right" @click.native="showRegister">注册</el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
    <el-dialog title="注册" v-model="registerDialogForm">
      <el-form :model="registerForm" label-width="80px">
        <el-form-item label="用户名:">
          <el-input v-model="registerForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="registerForm.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="register">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="登陆" v-model="loginDialogForm">
      <el-form :model="loginForm" label-width="80px">
        <el-form-item label="用户名:">
          <el-input v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="login">确 定</el-button>
      </span>
    </el-dialog>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <el-row class="footer">
      <el-col :span="24">
        <div class="grid-content">
          Place sticky footer content here.
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import APIS from './api/index';
  export default {
    data () {
      return {
        registerDialogForm: false,
        loginDialogForm: false,
        registerForm: {
          username: '',
          password: ''
        },
        loginForm: {
          username: '',
          password: ''
        },
        navActive: '1',
        isLogin: true
      };
    },
    methods: {
      showRegister () {
        this.registerDialogForm = true;
      },
      showLogin () {
        this.loginDialogForm = true;
      },
      register () {
        const self = this;
        if (!this.registerForm.username) {
          this.$message('用户名不能为空！');
          return;
        }
        if (!this.registerForm.password) {
          this.$message('密码名不能为空！');
          return;
        }
        APIS.register({
          username: self.registerForm.username,
          password: self.registerForm.password
        }).then(function (res) {
          if (res.body.status) {
            self.registerDialogForm = false;
          }
          self.$message(res.body.message);
        }).catch(function (err) {
          console.log(err);
        });
      },
      login () {
        const self = this;
        if (!this.loginForm.username) {
          this.$message('用户名不能为空！');
          return;
        }
        if (!this.loginForm.password) {
          this.$message('密码名不能为空！');
          return;
        }
        APIS.login({
          username: self.loginForm.username,
          password: self.loginForm.password
        }).then(function (res) {
          console.log(res);
          if (res.body.status) {
            self.loginDialogForm = false;
            self.isLogin = false;
            self.islLogin(res.body.data[0].username);
          }
          self.$message(res.body.message);
        }).catch(function (err) {
          console.log(err);
          self.$message('请求出错啦！');
        });
      },
      ...mapActions([
        'islLogin'
      ])
    },
    watch: {
      '$route' (to, from) {
        switch (to.name) {
          case 'signUp':
            this.navActive = '2';
            break;
          case 'introduce':
            this.navActive = '4';
            break;
          case 'allDetail':
            this.navActive = '3';
            break;
          default:
            this.navActive = '1';
            break;
        }
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  #main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .logo {
    line-height: 60px;
    background: #eff2f7;
    text-indent: 20px;
  }

  .footer {
    height: 100px;
    background: #324057;
    margin-top: 50px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    font-size: 12px;
  }
</style>
