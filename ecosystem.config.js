module.exports = {
  apps : [{
    name: 'myapp',
    script: 'pm2server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two', // 
    instances: 3, // 实例
    autorestart: true,
    watch: false,
    max_memory_restart: '1G', // 自动重启 用多少内存
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  // 可以帮我们实现 自动发布   可以和 git 一同使用
  // 自动发布服务器
  deploy : {
    production : {
      user : 'root',
      host : '94.191.89.36',
      ref  : 'origin/master',
      repo : 'https://github.com/fanbingkun/pm2-deploy.git',
      path : '/home',
      // 安装好依赖 重启  并且环境是 production
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
