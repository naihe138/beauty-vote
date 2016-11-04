/**
* @file 测试文件
* @author 何文林
* @date 16/10/20
*/
<template>
  <div id="">
    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="search" @click.native="test(1)">搜索</el-button>
      <span>123123</span>
    </div>
    <el-select v-model="value">
      <el-option
        v-for="item in options"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .test{
    background: red;
  }
</style>
<script>
  export default{
    data () {
      return {
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        value: ''
      };
    },
    methods: {
      test: function (value) {
        console.log(value);
      }
    }
  };
</script>
