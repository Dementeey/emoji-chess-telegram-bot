const { Markup } = require('telegraf')

const commands = {
  random: '🎲 Random',
  white: '⚪ White',
  black: '⚫️ Black',
  stop: '🛑 Stop',
  start: '/start',
}

const keyboardAfterStop = Markup.keyboard([commands.start])
const keyboardAfterStart = Markup.keyboard([commands.stop])
const keyboardStart = Markup.keyboard([
  [commands.black, commands.white, commands.random],
])
  .oneTime(true)
  .resize()

module.exports = {
  commands,
  keyboardAfterStart,
  keyboardStart,
  keyboardAfterStop,
}
