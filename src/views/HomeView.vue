<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
// import request from "../utils/request.js"
 import Testapi from '../api/test.js'

export default {
  name: "HomeView",
  data () {
      return {
         page:1,
         size:10      
      }
  },
  components: {},
  created() {
    // 会员管理
    Testapi.getMemberList( this.page, this.size ).then(response=>{
      console.log('member=>',response);
    }).catch(error=>{
      console.log(error);
    })

    // 供应商管理
    Testapi.getSupplier( this.page, this.size ).then(response=>{
      console.log('Supplier=>',response);
    }).catch(error=>{
      console.log(error);
    })








    // // console.log('promise',Testapi.getNewList());
    // Testapi.getNewList().then(response=>{
    //    console.log(response);
    // }).catch(error=>{
    //    console.log(error);
    // })
    // request({
    //   url: process.env.VUE_APP_BASE_API+"/",
    //   method: "GET",
    // }).then(response => {
    //     console.log(response);
    //   }).catch(error => {
    //     console.log(error);
    //   }),
      // request({
      //   url: process.env.VUE_APP_BASE_API1+"/",
      //   method: "GET",
      // }).then(response => {
      //     console.log(response);
      //   }).catch(error => {
      //     console.log(error);
      //   });
  },
};
</script>
