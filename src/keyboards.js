const { Markup } = require('telegraf')

const commands = {
  random: '🎲 Рандом',
  white: '⚪ Белый',
  black: '⚫️ Черные',
  stop: '🛑 Завершить игру',
  start: '♟ Начать игру',
  rules: '❓ Правила',
}

const keyboardAfterStop = Markup.keyboard([[commands.start]]).resize()
const keyboardAfterStart = Markup.keyboard([
  [commands.rules],
  [commands.stop],
]).resize()
const keyboardStart = Markup.keyboard([
  [commands.black, commands.white, commands.random],
])
  .oneTime()
  .resize()

module.exports = {
  commands,
  keyboardAfterStart,
  keyboardStart,
  keyboardAfterStop,
}
