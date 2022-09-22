<template>
  <div class="login">
    <div class="login-from">
      <h2 class="login-title">积云会员管理系统</h2>
      <el-form ref="form" :rules="rules" :model="loginForm" label-width="80px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" 
          @click="handelLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password:"",
      },
      rules:{
        username:[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password:[
             { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    // 登录功能  表单校验
    handelLoginSubmit() {
      console.log("submit!");
      this.$refs['form'].validate((valid) => {
          if (!valid) return
          console.log(123);
          this.handleLogin()
        });
    },
    // 实现登录
     async handleLogin(){
         try{
            const response = await login(this.loginForm)
            console.log('response=>',response);
            console.log('token=>',response.data.data.token);
         }catch(e){
            console.log(e.message);
         }
    }
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
