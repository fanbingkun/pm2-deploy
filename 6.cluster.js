// 族
const cluster = require('cluster') // 基于fork的封装
// 在集群的模式下  可以监听通一个端口号
const http = require('http')
const cpus = require('os').cpus().length

if(cluster.isMaster){
  console.log('主')
  // 开启子进程  如果fork后会将此文件重新执行
  // 守护进程  谁挂了  就传过来
  cluster.on('exit', function(worker){
    console.log(worker.process.pid, '挂了')
    // 重启
    cluster.fork()
  })
  for(let i = 0; i< cpus; i++){
    cluster.fork()
  }
  // fork 一次就会走 子
}else{
  // 集群
  http.createServer((req, res)=>{
    if(Math.random()>0.5){
      aa()
    }
    res.end('process' + process.pid)
  }).listen(3000)
  console.log(process.pid)
}