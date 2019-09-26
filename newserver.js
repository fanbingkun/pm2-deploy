const http = require('http')
const {spawn} = require('child_process')
const path = require('path')

http.createServer((req, res) => {
  if(req.url === '/sum'){
    let cp = spawn('node', ['a.js'], {
      cwd: path.resolve(__dirname),
      stdio: [0, 1, 'ipc']
    })
    cp.on('message', (data) => {
      res.end(''+data)
    })
  }else{
    res.end('end ok')
  }
}).listen(3000)