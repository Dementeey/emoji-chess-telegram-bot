const { CageBase } = require('./cage')

//Типы фигур

// король
const FIGURE_TYPE_KING = 1
// ферзь
const FIGURE_TYPE_QUEEN = 2
// ладья
const FIGURE_TYPE_ROOK = 3
// слон
const FIGURE_TYPE_BISHOP = 4
// конь
const FIGURE_TYPE_KNIGHT = 5
// пешка
const FIGURE_TYPE_PAWN = 6

// цвета фигур
const FIGURE_BLACK_COLOR = 'black'
const FIGURE_WHITE_COLOR = 'white'

// Соответствие между номером фигуры и её представлением
const FIGURE_VIEW_MAP = new Map()
  .set(FIGURE_TYPE_KING, {
    [FIGURE_BLACK_COLOR]: '🤴🏿',
    [FIGURE_WHITE_COLOR]: '🤴🏻',
  })
  .set(FIGURE_TYPE_QUEEN, {
    [FIGURE_BLACK_COLOR]: '👸🏿',
    [FIGURE_WHITE_COLOR]: '👸🏼',
  })
  .set(FIGURE_TYPE_ROOK, {
    [FIGURE_BLACK_COLOR]: '✊🏿',
    [FIGURE_WHITE_COLOR]: '✊🏻',
  })
  .set(FIGURE_TYPE_BISHOP, {
    [FIGURE_BLACK_COLOR]: '💂🏿',
    [FIGURE_WHITE_COLOR]: '💂🏻',
  })
  .set(FIGURE_TYPE_KNIGHT, {
    [FIGURE_BLACK_COLOR]: '🐴',
    [FIGURE_WHITE_COLOR]: '🦄',
  })
  .set(FIGURE_TYPE_PAWN, {
    [FIGURE_BLACK_COLOR]: '👮🏿‍♂️',
    [FIGURE_WHITE_COLOR]: '👮🏻‍♂️',
  })

class Figure extends CageBase {
  #color = FIGURE_WHITE_COLOR
  #type = FIGURE_TYPE_PAWN

  constructor(...props) {
    super(...props)
  }

  get color() {
    return this.#color
  }

  get type() {
    return this.#type
  }

  get view() {
    return FIGURE_VIEW_MAP.get(this.#type)[this.#color]
  }
}

module.exports = {
  Figure,
  FIGURE_TYPE_KING,
  FIGURE_TYPE_QUEEN,
  FIGURE_TYPE_ROOK,
  FIGURE_TYPE_BISHOP,
  FIGURE_TYPE_KNIGHT,
  FIGURE_TYPE_PAWN,
  FIGURE_BLACK_COLOR,
  FIGURE_WHITE_COLOR,
  FIGURE_VIEW_MAP,
}
