
// 会员接口   http://vue.mengxuegu.com/pro-api/member/list/search/1/20
// 供应商接口  http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// 查询接口  http://vue.mengxuegu.com/pro-api/member/10

import request from "../utils/request"

/**
 * 获取会员列表接口
 * @param {*} page 
 * @param {*} size 
 * @param {*} data 
 */
 const getMemberList =(page = 1,size = 10, data = {})=>{
  return request({
     url: `/member/list/search/${page}/${size}`,
     method: 'POST',
     data
   })
 }

/**
 * 获取供应列表接口
 * @param {*} page 
 * @param {*} siaze 
 * @param {*} data 
 */
 const getSupplier =(page = 1,size = 10, data = {})=>{
  return request({
    url:`/supplier/list/search/${page}/${size}`,
    method: 'POST',
    data
  })
 }

 /**
  * 获取查询数据列表
  * @param {*} id 
  * @returns 
  */
 const findMenber =(id)=>{
    return request({
      url:`/member/${id}`,
      method:"GET",
      data:{
        age:1000
      }
    })
 }


 export default {
  getMemberList,
  getSupplier,
  findMenber
}



// 3000的接口
// const  getNewList = () =>{
//  return request({
//     url:'',
//     method: "GET"
//   })

// }
// 4000的接口
// const  getLiveList = () =>{
// }
