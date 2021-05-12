// цвета клеток
const CAGE_FIELD_BLACK_COLOR = 'black'
const CAGE_FIELD_WHITE_COLOR = 'white'

//Типы клеток

const CAGE_TYPE_GAME_FIELD = 'game_field'
const CAGE_TYPE_HORIZONTAL_BORDER = 'horizontal_border'

const CAGE_TYPE_NUMBER = '#'
const CAGE_TYPE_NUMBER_1 = 1
const CAGE_TYPE_NUMBER_2 = 2
const CAGE_TYPE_NUMBER_3 = 3
const CAGE_TYPE_NUMBER_4 = 4
const CAGE_TYPE_NUMBER_5 = 5
const CAGE_TYPE_NUMBER_6 = 6
const CAGE_TYPE_NUMBER_7 = 7
const CAGE_TYPE_NUMBER_8 = 8

const CAGE_TYPE_LETTER_A = 'A'
const CAGE_TYPE_LETTER_B = 'B'
const CAGE_TYPE_LETTER_C = 'C'
const CAGE_TYPE_LETTER_D = 'D'
const CAGE_TYPE_LETTER_E = 'E'
const CAGE_TYPE_LETTER_F = 'F'
const CAGE_TYPE_LETTER_G = 'G'
const CAGE_TYPE_LETTER_H = 'H'

const CAGE_TYPE_VIEW_MAP = new Map()
  .set(CAGE_TYPE_GAME_FIELD, {
    [CAGE_FIELD_BLACK_COLOR]: '⬛️',
    [CAGE_FIELD_WHITE_COLOR]: '⬜️',
  })
  .set(CAGE_TYPE_HORIZONTAL_BORDER, '   ')
  .set(CAGE_TYPE_NUMBER, '#️⃣')
  .set(CAGE_TYPE_NUMBER_1, '1️⃣')
  .set(CAGE_TYPE_NUMBER_2, '2️⃣')
  .set(CAGE_TYPE_NUMBER_3, '3️⃣')
  .set(CAGE_TYPE_NUMBER_4, '4️⃣')
  .set(CAGE_TYPE_NUMBER_5, '5️⃣')
  .set(CAGE_TYPE_NUMBER_6, '6️⃣')
  .set(CAGE_TYPE_NUMBER_7, '7️⃣')
  .set(CAGE_TYPE_NUMBER_8, '8️⃣')
  .set(CAGE_TYPE_LETTER_A, '[A]')
  .set(CAGE_TYPE_LETTER_B, '[B]')
  .set(CAGE_TYPE_LETTER_C, '[C]')
  .set(CAGE_TYPE_LETTER_D, '[D]')
  .set(CAGE_TYPE_LETTER_E, '[E]')
  .set(CAGE_TYPE_LETTER_F, '[F]')
  .set(CAGE_TYPE_LETTER_G, '[G]')
  .set(CAGE_TYPE_LETTER_H, '[H]')

class CageBase {
  #color = null
  #type = null

  constructor(type, color) {
    if (!type || !color) {
      throw new Error('The constructor parameters are required')
    }

    this.#type = type
    this.#color = color
  }

  get color() {
    return this.#color
  }

  get type() {
    return this.#type
  }
}

class Cage extends CageBase {
  #figure = null

  constructor(type, color, figure) {
    super(type, color)

    this.#figure = figure
  }

  get view() {
    if (this.type === CAGE_TYPE_GAME_FIELD) {
      return CAGE_TYPE_VIEW_MAP.get(this.type)[this.color]
    }

    return CAGE_TYPE_VIEW_MAP.get(this.type)
  }
}

const DEFAULT_VIEW_WHITE_BOARD = `#️⃣   [A][B][C][D][E][F][G][H]   #️⃣
8️⃣   ✊🏿🐴💂🏿👸🏿🤴🏿💂🏿🐴✊🏿   8️⃣
7️⃣   👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️   7️⃣
6️⃣   ⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️   6️⃣
5️⃣   ⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️   5️⃣
4️⃣   ⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️   4️⃣
3️⃣   ⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️   3️⃣
2️⃣   👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️   2️⃣
1️⃣   ✊🏻🦄💂🏻👸🏼🤴🏻💂🏻🦄✊🏻   1️⃣     
#️⃣   [A][B][C][D][E][F][G][H]   #️⃣`

const DEFAULT_VIEW_BLACK_BOARD = `#️⃣   [H][G][F][E][D][C][B][A]   #️⃣
1️⃣   ✊🏻🦄💂🏻👸🏼🤴🏻💂🏻🦄✊🏻   1️⃣
2️⃣   👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️👮🏻‍♂️   2️⃣
3️⃣   ⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️   3️⃣
4️⃣   ⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️   4️⃣
5️⃣   ⬜️⬛️⬜️⬛️⬜️⬛️⬜️⬛️   5️⃣
6️⃣   ⬛️⬜️⬛️⬜️⬛️⬜️⬛️⬜️   6️⃣
7️⃣   👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️👮🏿‍♂️   7️⃣
8️⃣   ✊🏿🐴💂🏿👸🏿🤴🏿💂🏿🐴✊🏿   8️⃣
#️⃣   [H][G][F][E][D][C][B][A]   #️⃣`

const DEFAULT_BOARD = [[], [], [], []]

module.exports = {
  Cage,
  CageBase,
  DEFAULT_BOARD,
  DEFAULT_VIEW_BLACK_BOARD,
  DEFAULT_VIEW_WHITE_BOARD,
}
