const { state } = require('./core')
const {
  keyboardAfterStart,
  keyboardStart,
  keyboardAfterStop,
} = require('./keyboards')
const { moveFigureReg, getRandom } = require('./utils')
const { getBoard } = require('./board')

const handleStartButton = (ctx) =>
  ctx.reply('Привет! Выбирай цвет фигур!', keyboardStart)

const handleStopButton = async (ctx) => {
  state.endGame()

  await ctx.reply('Game stopped', keyboardAfterStop)
}
const handleBlackButton = async (ctx) => {
  if (state.state.white) {
    state.reshapeColor()
  }

  const { message_id } = await ctx.reply(getBoard(), keyboardAfterStart)
  state.startGame(message_id)
}

const handleWhiteButton = async (ctx) => {
  if (state.state.black) {
    state.reshapeColor()
  }

  const { message_id } = await ctx.reply(getBoard(), keyboardAfterStart)
  state.startGame(message_id)
}
const handleRandomButton = async (ctx) => {
  if (getRandom(1, 3) === 2) {
    state.reshapeColor()
  }

  const { message_id } = await ctx.reply(getBoard(), keyboardAfterStart)
  state.startGame(message_id)
}
const handleRulesButton = async (ctx) => {
  await ctx.reply(
    `Правила такие:
1: ок
2: ок`,
  )
}

const handleMessage = async (ctx) => {
  if (!state.state.isGameStarted) {
    await ctx.deleteMessage(ctx.update.message.message_id)
    return
  }

  if (!moveFigureReg.test(ctx.update.message.text)) {
    await ctx.deleteMessage(ctx.update.message.message_id)
    return await ctx.reply(`Сделайте пожалуйста ваш ход, например: G2=>G4`)
  }

  await ctx.deleteMessage(state.state.messageId)
  await ctx.reply(getBoard())
}

module.exports = {
  handleStartButton,
  handleRandomButton,
  handleBlackButton,
  handleWhiteButton,
  handleStopButton,
  handleMessage,
  handleRulesButton,
}
