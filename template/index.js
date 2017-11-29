const { Composer, log } = require('micro-bot')

const bot = new Composer()

bot.use(log())
bot.start(({ reply }) => reply('Hey there!'))
bot.command('help', ({ reply }) => reply('Help message'))
bot.command('about', ({ reply }) => reply('About message'))

module.exports = bot
