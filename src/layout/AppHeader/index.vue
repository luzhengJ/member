<template>
  <div class="app-header">
    <router-link to="/" class="link">
      <img
        class="logo"
        src="http://vue.mengxuegu.com/img/logo.7156be27.png"
        alt="logo"
        width="25px"
      />
      <span class="title">积云会员管理系统</span>
    </router-link>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ $store.getters.userInfo.name || ""
        }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="changePass" icon="el-icon-edit"
          >修改密码</el-dropdown-item
        >
        <el-dropdown-item command="LoginOut" icon="el-icon-s-fold"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      // 判断是“修改密码”还是“退出登录”
      switch (command) {
        case "changePass":
          this.handleChangePass();
          break;
        case "LoginOut":
          this.handleLoginOut();
          break;
      }
    },
    // 修改密码
    handleChangePass() {
      alert("修改密码");
    },
    // 退出登录
    async handleLoginOut() {
      try {
        const response = await this.$store.dispatch("handleLogout");
        setTimeout(()=>{
         this.$router.push("/login");
        },100)
        this.$message.success('退出成功')
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: #fff;
  margin-left: 20px;
  line-height: 50px;
}
.logo {
  vertical-align: middle;
}
.title {
  color: #fff;
  margin-left: 8px;
  font-size: 16px;
  vertical-align: middle;
}
.el-dropdown {
  float: right;
  color: #fff;
  margin-right: 30px;
}
</style>
