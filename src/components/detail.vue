/**
* @file
* @author 何文林
* @date 16/10/24
*/
<template>
  <div id="detail">
    <el-row>
      <el-col :span="24" class="content">
        <div class="grid-content"> 姓名: {{detail.name}}</div>
        <div class="grid-content"> 性别: {{detail.sex}}</div>
        <div class="grid-content"> 报名时间: {{detail.date}}</div>
        <div class="grid-content">
          <img :src="API_ROOT + detail.img" class="image">
        </div>
        <div class="grid-content"> 留言:</div>
        <div class="grid-content"> {{detail.desc}}</div>
        <div class="grid-content"> 获得{{detail.tickit}}票</div>
        <div class="grid-content"> <el-button type="primary" @click.native="toTickit">给她投票</el-button></div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
  #detail {
    width: 1000px;
    margin: 0 auto;
    .content{
      padding: 50px 0;
      text-align: center;
      line-height: 30px;
      color: #8492A6;
      img{
        max-width: 100%;
      }
    }
  }
</style>
<script>
  import { mapActions } from 'vuex';
  import APIS from '../api/index';
  export default{
    data () {
      return {
        API_ROOT: APIS.API_ROOT
      };
    },
    methods: {
      ...mapActions([
        'getDetail'
      ]),
      toTickit () {
        const id = this.$route.params.id;
        const self = this;
        APIS.toTickit({id}).then((res) => {
          if (res.body.status) {
            self.getDetail(self.$route.params.id);
            self.$message('投票成功！');
          }
        }).catch((err) => {
          console.lg(err);
          self.$message('投票失败！');
        });
      }
    },
    computed: {
      detail () {
        return this.$store.state.detail;
      }
    },
    mounted () {
      this.getDetail(this.$route.params.id);
    }
  };
</script>
