// 产生子进程
let {spawn} = require('child_process')
let path = require('path')
// node + 文件名
// 返回一个子进程

// 默认进程间是不能通信的
// 这边的node 只是一个命令  也能有ls cp类似于这样的
let cp = spawn('node', ['a.js'], {
  cwd: path.resolve(__dirname),
  // 标准输入  输出 错误输出  也可以用 0 1 2 
  // 共享父进程中的输入输出   这样的问题 还没有对输出进行操作
  // stdio: [process.stdin, process.stdout, process.stderr]
  // stdio: 'ignore', // 这边默认忽略子进程的输入输出
  // inherit    
  // ipc方式 进程通信
  stdio: 'pipe', // 父子进程通信通过管道通信
})

// 子进程通过stdout || stdin  输出   父进程用这个接受
cp.stdout.on('data', function(data){
  console.log(data, '父进程')
})

cp.on('error', function(err){
  console.log(err)
})

cp.on('close', function(){
  console.log('close')
})

cp.on('exit', function(){
  console.log('exit')
})