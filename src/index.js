require('dotenv').config()
const { Telegraf } = require('telegraf')
const { commands } = require('./keyboards')
const {
  handleStartButton,
  handleRandomButton,
  handleWhiteButton,
  handleBlackButton,
  handleStopButton,
  handleMessage,
  handleRulesButton,
} = require('./controllers')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(Telegraf.log())
bot.start(handleStartButton)
bot.hears(commands.start, handleStartButton)
bot.hears(commands.random, handleRandomButton)
bot.hears(commands.white, handleWhiteButton)
bot.hears(commands.black, handleBlackButton)
bot.hears(commands.stop, handleStopButton)
bot.hears(commands.rules, handleRulesButton)
bot.on('message', handleMessage)
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
