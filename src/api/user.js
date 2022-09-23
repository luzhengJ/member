import request from "../utils/request";

/**
 * 登录方法
 * @parmas
 * @returns
 */
export const login = (data = {}) => {
  return request({
    url: "/admin/login",
    method: "POST",
    data,
  });
};

/**
 * 获取用户信息
 * @returns 
 */
export const getUserInfo =()=>{
  return request({
    url:"/admin/getUserInfo",
    method:"GET",
  })
}