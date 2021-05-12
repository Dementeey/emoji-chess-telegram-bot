const { FIGURE_BLACK_COLOR, FIGURE_WHITE_COLOR } = require('./figures')
const { moveFigureReg } = require('./../utils')
class State {
  #color = FIGURE_WHITE_COLOR
  #isGameStarted = false
  #messageIdWithBoard = null

  #isFirstMoveIsMade = false
  #game = null

  constructor(game) {
    if (!game) {
      throw new Error('The constructor parameters are required')
    }
    this.#game = game
  }

  get board() {
    return this.#game.board
  }

  get messageIdWithBoard() {
    return this.#messageIdWithBoard
  }

  set messageIdWithBoard(messageId) {
    if (!messageId) {
      return false
    }

    this.#messageIdWithBoard = messageId
    return true
  }

  get color() {
    return this.#color
  }

  get isGameStarted() {
    return this.#isGameStarted
  }

  get isFirstMoveIsMade() {
    return this.#isFirstMoveIsMade
  }

  startGame() {
    if (this.#isGameStarted) {
      console.error(new Error('The game has already started!'))
      return false
    }
    console.log(this.#color, '<=== this.#color ===')
    this.#isGameStarted = true
    return this.#game.start(this.#color)
  }

  endGame() {
    if (!this.#isGameStarted) {
      console.error(new Error('The game is already over!'))
      return false
    }

    this.#isGameStarted = false
    this.#game.end()
    return true
  }

  reshapeColor() {
    if (this.#isGameStarted) {
      console.error(new Error('The game has already started!'))
      return false
    }

    const isColorBlack = this.#color === FIGURE_BLACK_COLOR

    this.#color = isColorBlack ? FIGURE_WHITE_COLOR : FIGURE_BLACK_COLOR
    return true
  }

  movePiece(message = '') {
    if (!moveFigureReg.test(message)) {
      return null
    }

    const [from, to] = message.split('=>')

    // Move the E2 pawn to E4
    // this.#game.movePiece({
    //   from: { file: 5, rank: 2 },
    //   to: { file: 5, rank: 4 },
    // })

    return this.#game.moveFigure()
  }
}

module.exports = {
  State,
}
