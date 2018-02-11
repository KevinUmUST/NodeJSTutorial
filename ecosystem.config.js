module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'http://ec2-54-157-214-204.compute-1.amazonaws.com/',
      key: '~/.ssh/github',
      ref: 'origin/master',
      repo: 'git@github.com:KevinUmUST/NodeJSTutorial.git',
      path: '/home/NodeJSTutorial/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
