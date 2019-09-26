// 单线程问题
const http = require('http')

// 
http.createServer((req, res)=>{
  if(req.url === '/sum'){
    let total = 0
    for(let i = 0; i< 10000000000;i++){
      total += i
    }
    res.end('total:'+total)
  }else{
    res.end('end ok')
  }
}).listen(3000)

// 这个就是 缺陷    不适合cpu密集型
// 如果 第一个人 请求了 /sum 这边会进行大量的运算
// 所以第二个人访问 其他的时候 要等待 计算完成

// 可以把计算给子进程处理 会好点