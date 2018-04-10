const { Composer, log, session } = require('micro-bot')

const bot = new Composer()

bot.use(log())
bot.use(session())

bot.start(({ reply }) => reply('Welcome message'))
bot.help(({ reply }) => reply('Help message'))
bot.settings(({ reply }) => reply('Bot settings'))

bot.command('date', ({ reply }) => reply(`Server time: ${Date()}`))

module.exports = bot
