let path = require('path')
let {spawn} = require('child_process')

let cp = spawn('node', ['b.js'], {
  cwd: path.resolve(__dirname),
  detached: true,
  stdio: 'ignore', 
})
console.log('子进程pid', cp.pid)
cp.unref()