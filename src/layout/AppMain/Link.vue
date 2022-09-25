<template>
  <div class="link">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="item" :to="{ path: '/' }">
      {{BreakTitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    computed:{
        BreakTitle(){
            return this.$route.meta?.title
        }
    }

}
</script>
<style lang="scss" scoped>
.el-breadcrumb{
    height: 10px;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.item{
    border-left: 2px solid red;
    padding-left: 10px;
}
</style>

