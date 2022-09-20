const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("hello wjk")
})
server.listen(3000)