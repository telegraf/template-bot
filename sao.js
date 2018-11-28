const superb = require('superb')
const camelcase = require('camelcase')

module.exports = {
  templateOptions: {
    context: {
      camelcase
    }
  },
  prompts: {
    name: {
      message: 'What is the name of the new bot?',
      role: 'folder:name'
    },
    description: {
      message: 'How would you describe the new bot?',
      default: `my ${superb.random()} bot`
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email',
      store: true
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  enforceNewFolder: true,
  installDependencies: true,
  gitInit: true,
  showTip: true
}
