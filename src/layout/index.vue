<template>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="230px">
            <app-aside></app-aside>
        </el-aside>
        <el-main>
            <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import AppAside from "./AppAside"
import AppHeader from "./AppHeader"
import AppMain from "./AppMain"
export default {
    data () {
        return {
            
        }
    },
    components: {
        AppAside,
        AppHeader,
        AppMain
    }
};
</script>
<style lang="scss" scoped>
.el-container{
    height: 100%;
}
  .el-header{
    background-color: #2d3a4b;
    height: 50px !important;
    line-height: 50px;
    padding: 0;
  }
  
  .el-aside {
    background-color: #545c64;
    height: 100%;
  }
  
  .el-main {
    background-color: #fff;
    height: 100%;
  }
</style>
