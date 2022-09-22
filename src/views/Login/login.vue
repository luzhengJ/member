<template>
  <div class="login">
    <div class="login-from">
      <h2 class="login-title">积云会员管理系统</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password:"",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  background: url("http://vue.mengxuegu.com/img/login.b665435f.jpg") no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .login-from {
    width: 350px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 180px auto;
    border-radius: 20px;
    padding: 28px;
    .login-title{
        text-align: center;
        font-size:24px;
        color: #303133;
        padding: 20px;
    }
  }
}
</style>
