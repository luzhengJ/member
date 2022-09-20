const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer : {
    // 端口号
    port : 8888,
    // 主机名
    host : "localhost",
    // 项目启动时是否自动打开浏览器
    open : true,
    // 是否开启https
    https : false,
    // 配置跨域
    proxy:{
      // dev-api 代理名称
      [process.env.VUE_APP_BASE_API]:{
        // 跨域的地址
         target:process.env.VUE_APP_SERVER_URL,
        //  是否开启跨域
         changeOrigin : true,
        //  路径重写
        pathRewrite:{
         ["^" + process.env.VUE_APP_BASE_API] : ''
        }
      },
      [process.env.VUE_APP_BASE_API1]:{
        // 跨域的地址
         target:process.env.VUE_APP_SERVER_URL1,
        //  是否开启跨域
         changeOrigin : true,
        //  路径重写
        pathRewrite:{
         ["^" + process.env.VUE_APP_BASE_API1] : ''
        }
      }
    }
  }
})
