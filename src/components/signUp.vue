/**
* @file
* @author 何文林
* @date 16/10/21
*/
<template>
  <div id="signUp">
    <el-form label-position="top" ref="form">
      <el-form-item label="姓名:">
        <el-input v-model="form.name" placeholder="请填写姓名"></el-input>
      </el-form-item>
      <el-form-item label="性别:">
        <el-input v-model="form.sex" placeholder="请填写姓别"></el-input>
      </el-form-item>
      <el-form-item label="手机号码:">
        <el-input v-model="form.tel" placeholder="请填写手机号码"></el-input>
      </el-form-item>
      <el-form-item label="报名时间:">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期"
                          v-model="form.date1"
                          format = "yyyy-MM-dd"
                          style="width: 100%;">
          </el-date-picker>
        </el-col>
        <el-col class="line" :span="2">----</el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            format = "HH:mm:ss"
            placeholder="时间">
          </el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="上传图片:">
        <el-upload
          :action="rootUrl + '/upload'"
          type="drag"
          file="namepic"
          :multiple="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :on-error="handleError"
        >
          <i class="el-icon-upload"></i>
          <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="报名留言:">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native="onSubmit">立即创建</el-button>
        <el-button @click.native.prevent="">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import APIS from '../api/index';
  export default {
    name: 'signUp',
    data () {
      return {
        rootUrl: APIS.API_ROOT,
        form: {
          name: '',
          sex: '',
          tel: '',
          date1: '',
          date2: new Date(),
          desc: ''
        },
        img: ''
      };
    },
    methods: {
      toZoro (num) {
        return num > 9 ? num + '' : '0' + num;
      },
      formatdate (obj) {
        return obj.getFullYear() + '-' + (obj.getMonth() + 1) + '-' + this.toZoro(obj.getDate());
      },
      formattime (obj) {
        return obj.getHours() + ':' + obj.getMinutes() + ':' + this.toZoro(obj.getSeconds());
      },
      onSubmit () {
        const selft = this;
        const t1 = selft.formatdate(selft.form.date1);
        const t2 = selft.formattime(selft.form.date2);
        var obj = {
          name: selft.form.name,
          sex: selft.form.sex,
          tel: selft.form.tel,
          date: t1 + ' ' + t2,
          desc: selft.form.desc,
          img: selft.img,
          tickit: 0
        };
        APIS.enter(obj).then(res => {
          if (res.body.status) {
            selft.$router.push('/');
          }
        }).catch(err => {
          console.log(err);
        });
      },
      handleRemove (file, fileList) {
        console.log(file, fileList);
      },
      handlePreview (file) {
        console.log(JSON.stringify(file));
      },
      handleSuccess (obj) {
        this.img = obj.response.path;
      },
      handleError (obj) {
        console.log(JSON.stringify(obj));
      }
    }
  };
</script>

<style lang="less" rel="stylesheet/less">
  #signUp {
    width: 600px;
    margin: 50px auto;
    .line {
      text-align: center;
    }
  }
</style>
