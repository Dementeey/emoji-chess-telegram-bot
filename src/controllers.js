const { Markup } = require('telegraf')

const { state } = require('./core')
const { FIGURE_WHITE_COLOR, FIGURE_BLACK_COLOR } = require('./core/figures')
const {
  keyboardAfterStart,
  keyboardStart,
  keyboardAfterStop,
} = require('./keyboards')
const { moveFigureReg, getRandom } = require('./utils')

const handleStartButton = (ctx) =>
  ctx.reply('Привет! Выбирай цвет фигур!', keyboardStart)

const handleStopButton = async (ctx) => {
  state.endGame()

  await ctx.reply('Game stopped', keyboardAfterStop)
}
const handleBlackButton = async (ctx) => {
  try {
    if (state.color !== FIGURE_BLACK_COLOR) {
      state.reshapeColor()
    }

    const { message_id } = await ctx.reply(
      state.startGame(),
      keyboardAfterStart,
    )

    state.messageIdWithBoard(message_id)
  } catch (err) {
    state.endGame()
    console.error(err, '<=== handleBlackButton ===')
  }
}
const handleWhiteButton = async (ctx) => {
  try {
    if (state.color !== FIGURE_WHITE_COLOR) {
      state.reshapeColor()
    }

    const { message_id } = await ctx.reply(
      state.startGame(),
      keyboardAfterStart,
    )
    state.messageIdWithBoard(message_id)
  } catch (err) {
    state.endGame()
    console.error(err, '<=== handleWhiteButton ===')
  }
}
const handleRandomButton = async (ctx) => {
  try {
    if (getRandom(1, 3) === 2) {
      state.reshapeColor()
    }

    const { message_id } = await ctx.reply(
      state.startGame(),
      keyboardAfterStart,
    )

    state.messageIdWithBoard(message_id)
  } catch (err) {
    state.endGame()
    console.error(err, '<=== handleRandomButton ===')
  }
}
const handleRulesButton = async (ctx) => {
  await ctx.replyWithMarkdown(
    `
    Правила шахмат построены по правилам "ФИДЕ".
    Детальнее [тут](http://chess.sainfo.ru/lawsr.html)

    Правила игры с ботом такие:
1: Нажимаем старт, предоставляется выбор цвета фигур.
2: Делаем ход, вводим в поле ввода номер:
  <клетки фигуры которой будем ходить>=><куда будем ходить>.
  Обязательно латинскими буквами.
  Например: G2=>G4
  `,
  )
}

const handleMessage = async (ctx) => {
  if (!state.isGameStarted) {
    await ctx.deleteMessage(ctx.update.message.message_id)
    return
  }

  if (state.color !== FIGURE_WHITE_COLOR && !state.isFirstMoveIsMade) {
    return await ctx.reply(`НАРУШЕНИЕ ПРАВИЛ. Первыми ходят белые!`)
  }

  if (!moveFigureReg.test(ctx.update.message.text)) {
    await ctx.deleteMessage(ctx.update.message.message_id)
    return await ctx.reply(`Сделайте пожалуйста ваш ход. Например: G2=>G4`)
  }

  await ctx.deleteMessage(state.messageId)
  await ctx.reply(state.movePiece(ctx.update.message.text))
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
