// 基于 spawn ipc   的封装一层
const http = require('http')
const {fork, execFile, exec} = require('child_process')
const path = require('path')

// 功能 执行目录   最大文件 200k
// execFile  回调
// exec  也差不多 (ls -ll)
// execFile('ls', ['-ll'], (err, stdout, stderr)=>{
//   console.log(err, stdout, stderr)
// })

// 如果执行node脚本  而且需要获取内容 可以使用 fork
// 如果执行命令  exec
// 

// http.createServer((req, res) => {
//   if(req.url === '/sum'){
//     let cp = fork('a.js', {
//       cwd: path.resolve(__dirname),
//       silent: false // 不安静的 默认  0,1,2
//     }) // 默认加node命令
//     // let cp = spawn('node', ['a.js'], {
//     //   cwd: path.resolve(__dirname),
//     //   stdio: [0, 1, 'ipc']
//     // })
//     cp.on('message', (data) => {
//       res.end(''+data)
//     })
//   }else{
//     res.end('end ok')
//   }
// }).listen(3000)

exec('explorer http://www.baidu.com', function(err, stdout, stderr){

})


// 集群  
// 分布式