let total = 0
for(let i = 0; i < 10000000000; i++){
  total+=i
}

process.send(total)

// process.stdout.write('' + total) // 这边不能输出number

// process.stderr.write() 错误管道输出