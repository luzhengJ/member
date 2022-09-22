import request from "@/utils/request"


/**
 * 登录方法
 * @parmas
 * @returns 
 */
export const login =(data={})=>{
  return  request({
        url:'/admin/login',
        method:"POST",
        data
    })
}