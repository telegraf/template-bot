const { Composer, log } = require('micro-bot')

const bot = new Composer()
bot.use(log())
bot.command('start', ({ reply }) => reply('Hey!'))

module.exports = bot
