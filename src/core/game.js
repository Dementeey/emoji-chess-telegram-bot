const { DEFAULT_BOARD } = require('./cage')
const { FIGURE_VIEW_MAP } = require('./figures')

class Engine {
  #history = []
  #board = []

  #getBoard(color) {
    // TODO: Nee use color for create board with color
    return DEFAULT_BOARD
  }

  #getViewBoard(board) {
    return board.map((value) => FIGURE_VIEW_MAP.get(value[0]?.type))
  }

  get history() {
    return this.#history
  }

  set history(value) {
    if (!value) {
      throw new Error('Value is required')
    }
    if (typeof value !== 'string') {
      throw new Error('Value must be a string')
    }

    this.#history.push(value)
  }

  start(color) {
    if (!color) {
      throw new Error('Color is required')
    }
    if (typeof color !== 'string') {
      throw new Error('Color must be a string')
    }

    const board = this.#getBoard(color)
    this.#board = board

    return this.#getViewBoard(board)
  }

  end() {
    const history = [...this.#history]

    this.#board = []
    this.#history = []

    return history
  }

  moveFigure() {
    return this.#board
  }
}

module.exports = {
  Engine,
}
