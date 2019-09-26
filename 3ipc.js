// 产生子进程
let {spawn} = require('child_process')
let path = require('path')
// node + 文件名
// 返回一个子进程

// 默认进程间是不能通信的
let cp = spawn('node', ['a.js'], {
  cwd: path.resolve(__dirname),
  // 标准输入  输出 错误输出  也可以用 0 1 2 
  // 共享父进程中的输入输出   这样的问题 还没有对输出进行操作
  // stdio: [process.stdin, process.stdout, process.stderr]
  // stdio: 'ignore', // 这边默认忽略子进程的输入输出
  // inherit    
  // ipc方式 进程通信  [0,1,2,'ipc']
  stdio: [0,1,'ipc'], // 可以通过message 和 send进行通信
})

// 子进程 process.send()
// 主进程 监听消息  process.on('message', function(data){})
// 同样也可以给子进程发
// 子进程监听消息  就不会关闭
// 主动关闭  子进程 process.exit()
// 父进程 让子进程关闭  cp.kill()
// cp.pid 获取子进程进程 pid

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


// 子进程  要听从父进程   父进程kill掉 子进程会自动关闭

// 脱离主进程的 控制  stdio: 'ignore'  detached: true 独立进程
// cp.unref()