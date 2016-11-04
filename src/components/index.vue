<template>
  <div class="indexPage">
    <el-row class="content">
      <el-col :span="4">
        <div class="grid-content">
          <img class="headerImg" src="../assets/moren.png" alt="">
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content username">
          {{username}}
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          简介简介简介：总觉得放点文字比较好！
        </div>
      </el-col>
    </el-row>
    <!-- 图片-->
    <div class="carBox">
      <el-row>
        <el-col class="item" :span="5" v-for="(item, index) in list" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="API_ROOT + item.img" class="image">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{item.date}}</time>
                <router-link :to="'/detail/'+item._id">
                  <el-button type="text" class="button">给他投票</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="block">
      <el-pagination
        @sizechange="handleSizeChange"
        @currentchange="handleCurrentChange"
        :current-page="1"
        :page-size="1"
        layout="prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import APIS from '../api/index';
  export default {
    name: 'indexPage',
    data () {
      return {
        API_ROOT: APIS.API_ROOT
      };
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`);
      },
      ...mapActions([
        'getList'
      ])
    },
    computed: {
      list () {
        return this.$store.state.list;
      },
      username () {
        return this.$store.state.username ? this.$store.state.username : '未登录，请登录';
      }
    },
    mounted () {
      this.getList();
    }
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content {
    margin: 5px 0;
    .headerImg {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      float: right;
    }
    .username {
      text-indent: 20px;
      line-height: 100px;
      font-size: 20px;
    }
  }

  .carBox {
    width: 1200px;
    margin: 0 auto;
    .item {
      margin-top: 50px;

      .image {
        width: 100%;
        height: 260px;
      }

      .time {
        color: #8492A6;
        font-size: 12px;
      }

      .bottom {
        overflow: hidden;
        line-height: 30px;
        padding-top: 10px;
      }

      .button {
        float: right;
        font-size: 12px;
      }
    }
  }
  .block {
    margin: 50px auto;
    width: 420px;
  }
</style>
