require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')

const { state } = require('./core')
const { getBoard } = require('./board')
const {
  keyboardAfterStart,
  commands,
  keyboardStart,
  keyboardAfterStop,
} = require('./keyboards')
const { getRandom, moveFigureReg } = require('./utils')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(Telegraf.log())

bot.start((ctx) => ctx.reply('Привет! Выбирай цвет фигур!', keyboardStart))
bot.hears(commands.random, async (ctx) => {
  if (getRandom(1, 3) === 2) {
    state.reshapeColor()
  }

  const { message_id } = await ctx.reply(getBoard(), keyboardAfterStart)
  state.startGame(message_id)
})
bot.hears(commands.white, async (ctx) => {
  if (state.state.black) {
    state.reshapeColor()
  }

  const { message_id } = await ctx.reply(getBoard(), keyboardAfterStart)
  state.startGame(message_id)
})
bot.hears(commands.black, async (ctx) => {
  if (state.state.white) {
    state.reshapeColor()
  }

  const { message_id } = await ctx.reply(getBoard(), keyboardAfterStart)
  state.startGame(message_id)
})

bot.hears(commands.stop, async (ctx) => {
  state.endGame()

  await ctx.reply('Game stopped', keyboardAfterStop)
})

bot.on('message', async (ctx) => {
  if (!state.state.isGameStarted) {
    return
  }

  if (!moveFigureReg.test(ctx.update.message.text)) {
    await ctx.deleteMessage(ctx.update.message.message_id)
    return await ctx.reply(`Сделайте пожалуйста ваш ход, например: G2=>G4`)
  }

  await ctx.deleteMessage(state.state.messageId)
  await ctx.reply(getBoard())
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
