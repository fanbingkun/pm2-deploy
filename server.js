const http = require('http')

process.on('message', function(data, server){
  // 监听服务  所有人公用了  同一个端口号
  http.createServer((req, res) => {
    res.end(process.pid+'child_process')
  }).listen(server)
  console.log(process.pid, 'child_process')
})
// 实现使用多核cpu